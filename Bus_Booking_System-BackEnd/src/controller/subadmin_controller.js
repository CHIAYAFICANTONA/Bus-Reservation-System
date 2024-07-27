const dbconnection = require('../database');

exports.getSubadmin = async(req, res) => {
    try {
        const subadmin = await dbconnection.query('SELECT * FROM subadmin');
        res.status(200).send({
            success: true,
            data: subadmin[0],
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

exports.saveSubadmin = async(req, res) => {
    try {
        let {name,
            email,
            phoneNumber,
            password
        } = req.body;
        const subadmin = await dbconnection.query(
            'INSERT INTO subadmin(name, email, phoneNumber, password) VALUES(?, ?, ?, ?)',
            [name, email, phoneNumber, password]);
        res.status(201).send({
            success: true,
            data: subadmin,
            message: 'Successfully Saved Subadmin'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updateSubadmin = async(req, res) => {
    try {
        let {name,
            email,
            phoneNumber,
            password
        } = req.body;
        let id = req.query.id;
        const subadmin = await dbconnection.query(
            'UPDATE subadmin SET name = ?, email = ?, phoneNumber = ?, password = ? WHERE id= ?',
             [name, email, phoneNumber, password, id]
            );
        const updateSubadmin = await dbconnection.query(
            'SELECT * FROM subadmin WHERE id = ?',
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateSubadmin[0],
            message: 'Successfully Updated Subadmin'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteSubadmin = async(req, res) => {
    try {
        let id = req.params.id;
        const subadmin = await dbconnection.query(
            'DELETE FROM subadmin WHERE id= ?',
             [id]
            );
        res.status(200).send({
            success: true,
            data: subadmin,
            message: 'Successfully Deleted Subadmin with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}