const dbconnection = require('../database');

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
        let = { 
            reservationId,
            issueDate,
            price
        } = req.body;
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
                "INSERT INTO ticket(reservationId, issueDate, price) VALUES(?, ?, ?)",
                [reservationId, issueDate, price]);
            res.status(201).send({
                success: true,
                data: ticket,
                message: 'Successfully Saved Ticket'
            });
        };
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
        let = { 
            reservationId,
            issueDate,
            price
        } = req.body;
        let id = req.query.id;
        const ticket = await dbconnection.query(
            "UPDATE ticket SET reservationId = ?, issueDate = ?, price = ? WHERE id= ?",
             [reservationId, issueDate, price, id]
            );
        const updateTicket = await dbconnection.query(
            "SELECT * FROM ticket WHERE id = ?",
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
            "DELETE FROM ticket WHERE id= ?",
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