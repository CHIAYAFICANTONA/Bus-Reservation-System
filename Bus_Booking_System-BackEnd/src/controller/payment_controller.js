const dbconnection = require('../database');

exports.getPayment = async(req, res) => {
    try {
        const payment = await dbconnection.query(
            'SELECT p.id, p.amount, p.paymentMethod, p.isSuccessful, r.reservationDate AS reservation, p.paymentOn FROM payment p LEFT JOIN reservation r ON p.reservationId = r.id'
        );
        res.status(200).send({
            success: true,
            data: payment[0],
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

exports.savePayment = async(req, res) => {
    try {
        let {
            reservationId,
            amount,
            paymentMethod,
            isSuccessful,
            PaymentOn
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
            const payment = await dbconnection.query(
                "INSERT INTO payment(reservationId, amount, paymentMethod, isSuccessful, paymentOn) VALUES(?, ?, ?, ?, ?)",
                [reservationId, amount, paymentMethod, isSuccessful, PaymentOn]);
            res.status(201).send({
                success: true,
                data: payment,
                message: 'Successfully Saved Payment'
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updatePayment = async(req, res) => {
    try {
        let {
            reservationId,
            amount,
            paymentMethod,
            isSuccessful,
            PaymentOn
        } = req.body;
        let id = req.query.id;
        const payment = await dbconnection.query(
            'UPDATE payment SET reservationId = ?, amount = ?, paymentMethod = ?, isSuccessful = ?, paymentOn = ? WHERE id= ?',
             [reservationId, amount, paymentMethod, isSuccessful, PaymentOn, id]
            );
        const updatePayment = await dbconnection.query(
            'SELECT * FROM payment WHERE id = ?',
            [id]
        );
        res.status(201).send({
            success: true,
            data: updatePayment[0],
            message: 'Successfully Updated Payment'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deletePayment = async(req, res) => {
    try {
        let id = req.params.id;
        const payment = await dbconnection.query(
            'DELETE FROM payment WHERE id= ?',
             [id]
            );
        res.status(200).send({
            success: true,
            data: payment,
            message: 'Successfully Deleted Payment with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}