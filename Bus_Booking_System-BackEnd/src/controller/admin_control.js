const dbconnection = require('../database');

exports.getadmins = async(req, res) => {
    try {
        const admins = await dbconnection.query('SELECT * FROM admin');
        res.status(200).send({
            success: true,
            data: admins[0],
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