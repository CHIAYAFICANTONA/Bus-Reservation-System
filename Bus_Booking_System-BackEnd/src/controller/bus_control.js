const dbconnection = require('../database');

exports.getbuses = async(req, res) => {
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