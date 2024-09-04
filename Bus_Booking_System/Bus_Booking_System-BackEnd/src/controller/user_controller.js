const dbconnection = require('../database');

exports.getUsers = async(req, res) => {
    try {
        const users = await dbconnection.query('SELECT u.name AS userName, r.name AS role FROM users u LEFT JOIN role r ON u.roleId = r.id');
        res.status(200).send({
            success: true,
            data: users[0],
            message: 'Success'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.saveUsers = async(req, res) => {
    try {
        let {name,
            email,
            phoneNumber,
            password,
            image,
            createdOn,
            roleId
        } = req.body;

        const control_roleId = await dbconnection.query(
            'SELECT * FROM role WHERE id = ?', [roleId]
        );

        if(control_roleId[0].length === 0){
            res.status(404).send({
                success: false,
                data: [],
                message: 'Role ID not found'
            })
        }else{
            const user = await dbconnection.query(
                "INSERT INTO users(name, email, phoneNumber, password, image, createdOn, roleId) VALUES(?, ?, ?, ?, ?, ?, ?)",
                [name, email, phoneNumber, password, image, createdOn, roleId]);
            res.status(201).send({
                success: true,
                data: user,
                message: 'Successfully Saved User'
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updateUsers = async(req, res) => {
    try {
        let {name,
            email,
            phoneNumber,
            password,
            image,
            createdOn,
            roleId
        } = req.body;
        let id = req.query.id;
        const user = await dbconnection.query(
            "UPDATE users SET name = ?, email = ?, phoneNumber = ?, password = ?, image = ?, createdOn = ?, roleId = ? WHERE id= ?",
             [name, email, phoneNumber, password,, image, createdOn,roleId, id]
            );
        const updateUser = await dbconnection.query(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateUser[0],
            message: 'Successfully Updated User'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteUsers = async(req, res) => {
    try {
        let id = req.params.id;
        const user = await dbconnection.query(
            "DELETE FROM users WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: user,
            message: 'Successfully Deleted User with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}