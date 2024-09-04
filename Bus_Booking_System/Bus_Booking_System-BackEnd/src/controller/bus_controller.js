const dbconnection = require('../database');

exports.getBus = async(req, res) => {
    try {
        const buses = await dbconnection.query('SELECT licencePlate, totalSeats, departure, destination, image, departureDateTime, a.name AS agency FROM bus b LEFTJOIN agency a ON b.agencyID = a.id');
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
            totalSeats,
            departure,
            destination,
            image,
            departureDateTime,
            agencyId
        } = req.body;

        agency_controller = await dbconnection.query('SELECT * FROM agency WHERE id = ?', [agencyId]
        )

        if(agency_controller[0].length === 0){
            res.status(404).send({
                success: false,
                data: [],
                message: 'Agency ID not found'
            })
        }else{
            const bus = await dbconnection.query(
                'INSERT INTO bus(licensePlate, totalSeats, departure, destination, image, departureDateTime, agencyId) VALUES(?, ?, ?, ?, ?, ?, ?)',
                [licensePlate, totalSeats, departure, destination, image, departureDateTime, agencyId]);
            res.status(201).send({
                success: true,
                data: bus,
                message: 'Successfully Saved Bus'
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

exports.updateBus = async(req, res) => {
    try {
        let { 
            licensePlate,
            totalSeats,
            departure,
            destination,
            image,
            departureDateTime,
            agencyId
        } = req.body;
        let id = req.query.id;
        const bus = await dbconnection.query(
            'UPDATE bus SET licencePlate = ?, totalSeats = ? departure = ?, destination = ?, image = ?, departureDateTime = ?, agencyId = ? WHERE id= ?',
             [licensePlate, totalSeats, departure, destination, image, departureDateTime, agencyId, id]
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