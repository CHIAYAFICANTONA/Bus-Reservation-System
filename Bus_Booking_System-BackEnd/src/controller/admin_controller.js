const dbconnection = require('../database');

exports.getAdmin = async(req, res) => {
    try {
        const admin = await dbconnection.query('SELECT * FROM admin');
        res.status(200).send({
            success: true,
            data: admin[0],
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

exports.saveAdmin = async(req, res) => {
    try {
        let {name,
            email,
            phoneNumber,
            password,
            image,
            createdOn
        } = req.body;
        const admin = await dbconnection.query(
            'INSERT INTO admin(name, email, phoneNumber, password, image, createdOn) VALUES(?, ?, ?, ?, ?, ?)',
            [name, email, phoneNumber, password, image, createdOn]);
        res.status(201).send({
            success: true,
            data: admin,
            message: 'Successfully Saved Admin'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updateAdmin = async(req, res) => {
    try {
        let {name,
            email,
            phoneNumber,
            password,
            image,
            createdOn
        } = req.body;
        let id = req.query.id;
        const admin = await dbconnection.query(
            'UPDATE admin SET name = ?, email = ?, phoneNumber = ?, password = ?, image = ?, createdON = ? WHERE id= ?',
             [name, email, phoneNumber, password, image, createdOn, id]
            );
        const updateAdmin = await dbconnection.query(
            'SELECT * FROM admin WHERE id = ?',
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateAdmin[0],
            message: 'Successfully Updated Admin'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteAdmin = async(req, res) => {
    try {
        let id = req.params.id;
        const admin = await dbconnection.query(
            'DELETE FROM admin WHERE id= ?',
             [id]
            );
        res.status(200).send({
            success: true,
            data: admin,
            message: 'Successfully Deleted Admin with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}