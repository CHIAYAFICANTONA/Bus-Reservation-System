const dbconnection = require('../database');

exports.getBus = async(req, res) => {
    try {
        const buses = await dbconnection.query('SELECT * FROM bus');
        res.status(200).send({
            success: true,
            data: buses[0],
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

exports.saveBus = async(req, res) => {
    try {
        let { 
            licensePlate,
            driverName,
            departure,
            destination
        } = req.body;
        const bus = await dbconnection.query(
            'INSERT INTO bus(licensePlate, driverName, departure, destination) VALUES(?, ?, ?, ?)',
            [licensePlate, driverName, departure, destination]);
        res.status(201).send({
            success: true,
            data: bus,
            message: 'Successfully Saved Bus'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updateBus = async(req, res) => {
    try {
        let { 
            licensePlate,
            driverName,
            departure,
            destination
        } = req.body;
        let id = req.query.id;
        const bus = await dbconnection.query(
            'UPDATE bus SET licencePlate = ?, driverName = ? departure = ?, destination = ? WHERE id= ?',
             [licensePlate, driverName, departure, destination, id]
            );
        const updateBus = await dbconnection.query(
            'SELECT * FROM bus WHERE id = ?',
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateBus[0],
            message: 'Successfully Updated Bus'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteBus = async(req, res) => {
    try {
        let id = req.params.id;
        const bus = await dbconnection.query(
            'DELETE FROM bus WHERE id= ?',
             [id]
            );
        res.status(200).send({
            success: true,
            data: bus,
            message: 'Successfully Deleted Bus with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}