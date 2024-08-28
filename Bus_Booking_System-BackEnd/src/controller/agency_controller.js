const dbconnection = require('../database');

exports.getAgency = async(req, res) => {
    try {
        const agencies = await dbconnection.query('SELECT * FROM agency');
        res.status(200).send({
            success: true,
            data: agencies[0],
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

exports.saveAgency = async(req, res) => {
    try {
        let {name} = req.body;
        const agency = await dbconnection.query(
            "INSERT INTO agency(name) VALUES(?)",
            [name]);
        res.status(201).send({
            success: true,
            data: agency,
            message: 'Successfully Saved Agency'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.updateAgency = async(req, res) => {
    try {
        let {name} = req.body;
        let id = req.query.id;
        const agency = await dbconnection.query(
            "UPDATE agency SET name = ? WHERE id= ?",
             [name, id]
            );
        const updateAgency = await dbconnection.query(
            "SELECT * FROM agency WHERE id = ?",
            [id]
        );
        res.status(201).send({
            success: true,
            data: updateAgency[0],
            message: 'Successfully Updated Agency'
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}

exports.deleteAgency = async(req, res) => {
    try {
        let id = req.params.id;
        const user = await dbconnection.query(
            "DELETE FROM agency WHERE id= ?",
             [id]
            );
        res.status(200).send({
            success: true,
            data: user,
            message: 'Successfully Deleted Agency with id:'+id
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            data: [],
            message: error.stack
        });
    }
}