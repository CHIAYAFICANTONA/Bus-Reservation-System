const dbconnection = require('../database');

exports.gethotels = async(req, res) => {
    try {
        const hotels = await dbconnection.query('SELECT * FROM hotel');
        res.status(200).send({
            success: true,
            data: hotels[0],
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