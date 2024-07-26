const dbconnection = require('../database');

exports.getSeat = async(req, res) => {
    try {
        const seat = await dbconnection.query(
            'SELECT b.licencePlate AS bus, isAvailable FROM seat s LEFT JOIN bus b ON s.busId = b.id'
        );
        res.status(200).send({
            success: true,
            data: seat[0],
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

exports.saveSeat = async(req, res) => {
    try {
        let = { 
            busId,
            isAvailable
        } = req.body;
        const control_busId = await dbconnection.query(
            'SELECT * FROM bus WHERE id = ?', [busId]
        );

        if(control_busId[0].length===0){
            res.status(404).send({
                success: false,
                data: [],
                message: 'Bus ID not found'
            })
        }else{
            const seat = await dbconnection.query(
                "INSERT INTO seat(busId, isAvailable) VALUES(?, ?)",
                [busId, isAvailable]);
            res.status(201).send({
                success: true,
                data: seat,
                message: 'Successfully Saved Seat'
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

exports.updateSeat = async(req, res) => {
    try {
        let = { 
            busId,
            isAvailable
        } = req.body;
        let id = req.query.id;
        const seat = await dbconnection.query(
            "UPDATE seat SET busId = ?, isAvailable = ? WHERE id= ?",
             [busId, isAvailable, id]
            );
        const updateSeat = await dbconnection.query(
            "SELECT * FROM seat WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateSeat[0],
            message: 'Successfully Updated Seat'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteSeat = async(req, res) => {
    try {
        let id = req.params.id;
        const seat = await dbconnection.query(
            "DELETE FROM seat WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: seat,
            message: 'Successfully Deleted Seat with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}