const dbconnection = require('../database');

exports.getUserRoomBooking = async(req, res) => {
    try {
        const UserRoomBooking = await dbconnection.query(
            'SELECT u.name AS user, r.roomNumber AS roomNumber FROM userroombooking urb LEFT JOIN user u ON urb.userId = u.id LEFT JOIN room r ON urb.roomID = r.id'
        );
        res.status(200).send({
            success: true,
            data: UserRoomBooking[0],
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

exports.saveUserRoomBooking = async(req, res) => {
    try {
        let {
            userId,
            roomId
        } = req.body;
        const control_userId = await dbconnection.query(
            'SELECT * FROM user WHERE id = ?', [userId]
        );

        const control_roomId = await dbconnection.query(
            'SELECT * FROM room WHERE id = ?', [roomId]
        );

        if(control_userId[0].length===0 &&
            control_roomId[0].length===0){
                    res.status(404).send({
                        success: false,
                        data: [],
                        message: 'User ID and Room ID not found'
            })
        }else if(control_userId[0].length===0 &&
                 control_roomId[0].length!==0){
                    res.status(404).send({
                        success: false,
                        data: [],
                        message: 'User ID not found'
             })
        }else if(control_userId[0].length!==0 &&
                 control_roomId[0].length===0){
               res.status(404).send({
                   success: false,
                   data: [],
                   message: 'Room ID not found'
             })
        }else if(control_userId[0].length!==0 &&
                 control_roomId[0].length!==0){
            const UserRoomBooking = await dbconnection.query(
                'INSERT INTO userroombooking(userId, roomId) VALUES(?, ?)',
                [userId, roomId]);
            res.status(201).send({
                success: true,
                data: UserRoomBooking,
                message: 'Successfully Saved User Room Booking'
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

exports.updateUserRoomBooking = async(req, res) => {
    try {
        let {
            userId,
            roomId
        } = req.body;
        let id = req.query.id;
        const UserRoomBooking = await dbconnection.query(
            "UPDATE userroombooking SET userId = ?, roomId = ? WHERE id= ?",
             [userId, roomId, id]
            );
        const updateUserRoomBooking = await dbconnection.query(
            "SELECT * FROM reservation WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateUserRoomBooking[0],
            message: 'Successfully Updated User Room Booking'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteUserRoomBooking = async(req, res) => {
    try {
        let id = req.params.id;
        const UserRoomBooking = await dbconnection.query(
            "DELETE FROM userroombooking WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: UserRoomBooking,
            message: 'Successfully Deleted User Room Booking with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}