const dbconnection = require('../database');

exports.getReservation = async(req, res) => {
    try {
        const reservation = await dbconnection.query(
            'SELECT u.name AS user, b.licensePlate AS busLicensePlate, b.route AS busRoute, s.id AS seat, t.id AS ticketId, pm.amount AS tripPrice, pm.paymentMethod AS paymentMethod, reservationDate, reservedOn FROM reservation r LEFT JOIN user u ON r.userId = u.id LEFT JOIN bus b ON r.busID = b.id LEFT JOIN seat s ON r.seatID = s.id LEFT JOIN ticket t ON t.reservationId = r.id LEFT JOIN payment pm ON pm.reservationId = r.id'
        );
        res.status(200).send({
            success: true,
            data: reservation[0],
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

exports.saveReservation = async(req, res) => {
    try {
        let {
            userId,
            busId,
            seatId,
            reservationDate,
            reservedOn
        } = req.body;
        const control_userId = await dbconnection.query(
            'SELECT * FROM users WHERE id = ?', [userId]
        );

        const control_busId = await dbconnection.query(
            'SELECT * FROM bus WHERE id = ?', [busId]
        );

        const control_seatId = await dbconnection.query(
            'SELECT * FROM seat WHERE id = ?', [seatId]
        );

        if(control_userId[0].length===0 &&
            control_busId[0].length===0 &&
            control_seatId[0].length===0){
                    res.status(404).send({
                        success: false,
                        data: [],
                        message: 'User ID, Bus ID, and Seat ID not found'
            })
        }else if(control_userId[0].length===0 &&
                 control_busId[0].length===0 &&
                 control_seatId[0].length!==0){
                    res.status(404).send({
                        success: false,
                        data: [],
                        message: 'User ID and Bus ID not found'
             })
        }else if(control_userId[0].length===0 &&
                 control_busId[0].length!==0 &&
                 control_seatId[0].length===0){
               res.status(404).send({
                   success: false,
                   data: [],
                   message: 'User ID and Seat ID not found'
             })
        }else if(control_userId[0].length!==0 &&
                 control_busId[0].length===0 &&
                 control_seatId[0].length===0){
               res.status(404).send({
                   success: false,
                   data: [],
                   message: 'Bus ID and Seat ID not found'
             })
        }else if(control_userId[0].length===0 &&
                 control_busId[0].length!==0 &&
                 control_seatId[0].length!==0){
               res.status(404).send({
                   success: false,
                   data: [],
                   message: 'User ID not found'
             })
        }else if(control_userId[0].length!==0 &&
                 control_busId[0].length!==0 &&
                 control_seatId[0].length===0){
               res.status(404).send({
                   success: false,
                   data: [],
                   message: 'Seat ID not found'
             })
        }else if(control_userId[0].length!==0 &&
                 control_busId[0].length===0 &&
                 control_seatId[0].length!==0){
             res.status(404).send({
                 success: false,
                 data: [],
                 message: 'Bus ID not found'
        })
        }else if(control_userId[0].length!==0 &&
                 control_busId[0].length!==0 &&
                 control_seatId[0].length!==0){
            const payment = await dbconnection.query(
                'INSERT INTO reservation(userId, busId, seatId, reservationDate, reservedOn) VALUES(?, ?, ?, ?, ?)',
                [userId, busId, seatId, reservationDate, reservedOn]);
            res.status(201).send({
                success: true,
                data: payment,
                message: 'Successfully Saved Reservation'
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

exports.updateReservation = async(req, res) => {
    try {
        let {
            userId,
            busId,
            seatId,
            reservationDate,
            reservedOn
        } = req.body;
        let id = req.query.id;
        const reservation = await dbconnection.query(
            "UPDATE reservation SET userId = ?, busId = ?, seatId = ?, reservationDate = ?, reservedOn = ? WHERE id= ?",
             [userId, busId, seatId, reservationDate, reservedOn, id]
            );
        const updateReservation = await dbconnection.query(
            "SELECT * FROM reservation WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateReservation[0],
            message: 'Successfully Updated Reservation'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteReservation = async(req, res) => {
    try {
        let id = req.params.id;
        const reservation = await dbconnection.query(
            "DELETE FROM reservation WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: reservation,
            message: 'Successfully Deleted Reservation with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}