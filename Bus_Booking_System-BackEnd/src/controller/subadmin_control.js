const dbconnection = require('../database');

exports.getsubadmins = async(req, res) => {
    try {
        const subadmins = await dbconnection.query('SELECT * FROM subadmin');
        res.status(200).send({
            success: true,
            data: subadmins[0],
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