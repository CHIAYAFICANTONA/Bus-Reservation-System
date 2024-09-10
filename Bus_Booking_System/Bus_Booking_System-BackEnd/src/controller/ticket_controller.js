const dbconnection = require('../database');
const QRCode = require('qrcode')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');

const privateKey = fs.readFileSync('private.pem', 'utf8');
const publicKey = fs.readFileSync('public.pem', 'utf8');

exports.getTicket = async(req, res) => {
    try {
        const ticket = await dbconnection.query(
            'SELECT r.reservationDate AS reservation, issueDate, price FROM ticket t LEFT JOIN reservation r ON t.reservationId = r.id'
        );
        res.status(200).send({
            success: true,
            data: ticket[0],
            message: 'Success'
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        })
    }
}

exports.saveTicket = async(req, res) => {
    try {
        let {
            reservationId,
            issueDate,
            price
        } = req.body;

      const generateTicketId = () => {
        return uuidv4(); // Generates a unique ID like 'e2c7d718-6e89-4d7e-b2d2-4d2e2e2e2e2e'
      };

      const generateQRCode = async (ticketData) => {
        try {
          const qrCodeDataURL = await QRCode.toDataURL(ticketData); // Generates a Data URL for the QR code
          return qrCodeDataURL; // This URL can be sent to the frontend to be displayed as an image
        } catch (err) {
          console.error('Error generating QR code', err);
          throw err;
        }
      };

      const generateSignedTicket = (ticketData) => {
        const token = jwt.sign(
          ticketData, privateKey, { algorithm: 'RS256', expiresIn: '24h' }
      );
        return token;
      };

      const tripData = dbconnection.query(
        "SELECT u.name AS passengerName, u.email AS email, b.licensePlate AS licensePlate, b.departure AS departure, b.destination AS destination, b.departureDateTime AS departureDateTime, s.seatNumber AS seatNumber FROM ticket t LEFT JOIN reservation r ON t.reservationId = r.id LEFT JOIN users u ON r.userId = u.id LEFT JOIN bus b ON r.busId = b.id LEFT JOIN seat s ON r.seatId = s.id"
      )

       // Email transporter setup using Gmail (can use other SMTP providers)
 const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'anjohsamueljr@gmail.com',
      pass: 'Python2711.',
  },
});

// Generate the e-ticket as a PDF and send it via email
const generateETicket = async (tripData, qrCodeDataURL, res) => {
  const doc = new PDFDocument();
  const pdfPath = `etickets/${tripData.passengerName}_ticket.pdf`;

  // Pipe PDF to a file
  doc.pipe(fs.createWriteStream(pdfPath));

  // Add content to the PDF
  doc.fontSize(25).text('Your eTicket', { align: 'center' });
  doc.fontSize(16).text(`Passenger Name: ${tripData.passengerName}`, 100, 100);
  doc.text(`From: ${tripData.departure}`);
  doc.text(`To: ${tripData.destination}`);
  doc.text(`Trip Date-Time: ${tripData.departureDateTime}`);
  doc.text(`Seat Number: ${tripData.seatNumber}`);
  doc.text(`Bus License Plate: ${tripData.licensePlate}`);

  // Add QR code image to the PDF
  doc.image(Buffer.from(qrCodeDataURL.split(',')[1], 'base64'), {
      fit: [150, 150],
      align: 'center',
      valign: 'center',
  });

  doc.end();

  // Once the PDF is created, send it via email
  doc.on('finish', () => {
      const mailOptions = {
          from: 'anjohsamueljr@gmail.com',
          to: tripData.email,
          subject: 'Your eTicket from Krome Booking',
          text: 'Attached is your eTicket. Please present it at boarding.',
          attachments: [
              {
                  filename: `${tripData.passengerName}_ticket.pdf`,
                  path: pdfPath,
              },
          ],
      };

      transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
              console.error('Error sending email:', err);
              res.status(500).send('Error sending eTicket');
          } else {
              console.log('Email sent:', info.response);
              res.status(200).send('eTicket sent successfully');
          }
      });
  });
};


      const ticketId = generateTicketId();
      const ticketData = {ticketId: ticketId, reservationId: reservationId};
      const ticketDataSigned = generateSignedTicket(ticketData)
      const ticketQRCode = await generateQRCode(ticketDataSigned);

        const control_reservationId = await dbconnection.query(
            'SELECT * FROM reservation WHERE id = ?', [reservationId]
        );

        if(control_reservationId[0].length===0){
            res.status(404).send({
                success: false,
                data: [],
                message: 'Reservation ID not found'
            })
        }else{
            const ticket = await dbconnection.query(
                'INSERT INTO ticket(reservationId, issueDate, price, ticketId, ticketQRCode) VALUES(?, ?, ?, ?, ?)',
                [reservationId, issueDate, price, ticketId, ticketQRCode]);
            res.status(201).send({
                success: true,
                data: ticket,
                message: 'Successfully Saved Ticket'
            });

            generateETicket(tripData, ticketQRCode)
        };
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.verifyTicket = async(req, res) => {
  try {
    let {
      QRCode
    } = req.body;

    const verifyTicket = (token) => {
      jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        next();
        return decoded;
    });
    };

    const ticketStatus = await dbconnection.query(
      'SELECT isUsed FROM ticket'
    )

    const ticketData = verifyTicket(QRCode);
    const ticketId = ticketData.ticketId;

    if(ticketData){
      dbconnection.query(
        'UPDATE ticket SET isUsed = 1 WHERE ticketId = ?', [ticketId]
      );
      res.status(201).send({
        success: true,
        data: [],
        message: 'Valid Ticket'
    });
    }

    if(!ticketData || ticketStatus) { 
      res.status(401).send({
        success: false,
        data: [],
        message: 'Invalid or used Ticket'
      })
    }

  } catch (error) {
    res.status(500).send({
      success: false,
      data: [],
      message: error.stack
    });
  }
}

exports.updateTicket = async(req, res) => {
    try {
        let {
            reservationId,
            issueDate,
            price
        } = req.body;
        let id = req.query.id;
        const ticket = await dbconnection.query(
            'UPDATE ticket SET reservationId = ?, issueDate = ?, price = ? WHERE id= ?',
             [reservationId, issueDate, price, id]
            );
        const updateTicket = await dbconnection.query(
            'SELECT * FROM ticket WHERE id = ?',
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateTicket[0],
            message: 'Successfully Updated Ticket'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteTicket = async(req, res) => {
    try {
        let id = req.params.id;
        const ticket = await dbconnection.query(
            'DELETE FROM ticket WHERE id= ?',
             [id]
            );
        res.status(200).send({
            success: true,
            data: ticket,
            message: 'Successfully Deleted Ticket with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}
