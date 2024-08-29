const dbconnection = require('../database');

exports.getHotel = async(req, res) => {
    try {
        const hotel = await dbconnection.query('SELECT * FROM hotel');
        res.status(200).send({
            success: true,
            data: hotel[0],
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

exports.saveHotel = async(req, res) => {
    try {
        let {
            name,
            location,
            image,
            totalRooms
        } = req.body;
        const hotel = await dbconnection.query(
            'INSERT INTO bus(name, location, image, totalRooms) VALUES(?, ?, ?, ?)',
            [name, location, image, totalRooms]);
        res.status(201).send({
            success: true,
            data: hotel,
            message: 'Successfully Saved Hotel'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updateHotel = async(req, res) => {
    try {
        let {
            name,
            location,
            image,
            totalRooms
        } = req.body;
        let id = req.query.id;
        const hotel = await dbconnection.query(
            'UPDATE hotel SET name = ?, location = ?, image = ?, totalRooms = ? WHERE id= ?',
             [name, location, image, totalRooms, id]
            );
        const updateBus = await dbconnection.query(
            'SELECT * FROM hotel WHERE id = ?',
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateBus[0],
            message: 'Successfully Updated Hotel'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteHotel = async(req, res) => {
    try {
        let id = req.params.id;
        const hotel = await dbconnection.query(
            'DELETE FROM hotel WHERE id= ?',
             [id]
            );
        res.status(200).send({
            success: true,
            data: hotel,
            message: 'Successfully Deleted Hotel with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}