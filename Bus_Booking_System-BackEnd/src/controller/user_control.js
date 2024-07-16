const dbconnection = require('../database');

exports.getusers = async(req, res) => {
    try {
        const users = await dbconnection.query('SELECT * FROM users');
        res.status(200).send({
            success: true,
            data: users[0],
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