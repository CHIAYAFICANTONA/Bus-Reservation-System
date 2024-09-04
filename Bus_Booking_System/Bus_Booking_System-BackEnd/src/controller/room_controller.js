const dbconnection = require('../database');

exports.getRoom = async(req, res) => {
    try {
        const room = await dbconnection.query(
            'SELECT h.name AS hotel, roomNumber, isAvailable FROM room r LEFT JOIN hotel h ON r.hotelId = h.id'
        );
        res.status(200).send({
            success: true,
            data: room[0],
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

exports.saveRoom = async(req, res) => {
    try {
        let {
            hotelId,
            roomNumber,
            isAvailable,
            image
        } = req.body;
        const control_hotelId = await dbconnection.query(
            'SELECT * FROM hotel WHERE id = ?', [hotelId]
        );

        if(control_hotelId[0].length===0){
            res.status(404).send({
                success: false,
                data: [],
                message: 'Hotel ID not found'
            })
        }else{
            const room = await dbconnection.query(
                'INSERT INTO room(hotelId, roomNumber, isAvailable, image) VALUES(?, ?, ?, ?)',
                [hotelId, roomNumber, isAvailable, image]);
            res.status(201).send({
                success: true,
                data: room,
                message: 'Successfully Saved Room'
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

exports.updateRoom = async(req, res) => {
    try {
        let {
            hotelId,
            roomNumber,
            isAvailable,
            image
        } = req.body;
        let id = req.query.id;
        const room = await dbconnection.query(
            'UPDATE room SET hotelId = ?, roomNumber = ?, isAvailable = ?, image = ? WHERE id= ?',
             [hotelId, roomNumber, isAvailable, image, id]
            );
        const updateRoom = await dbconnection.query(
            'SELECT * FROM room WHERE id = ?',
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateRoom[0],
            message: 'Successfully Updated Room'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteRoom = async(req, res) => {
    try {
        let id = req.params.id;
        const room = await dbconnection.query(
            'DELETE FROM room WHERE id= ?',
             [id]
            );
        res.status(200).send({
            success: true,
            data: room,
            message: 'Successfully Deleted Room with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}