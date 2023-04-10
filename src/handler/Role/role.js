const roleModel = require('../../models/role.module');

exports.createRole = async (req, res) => {
    try {
        // const { role_name } = req.body; // get the data from body as json format
        const obj = {
            role_name: req.body.role_name
        }
       await roleModel.create(obj);

        res.send({ message: 'created Successfully', status: true, status_code: 200 });

    } catch (err){
        res.send({ err })
    }
}

exports.getRole = async (req, res) => {
    try {
        const roleData = await roleModel.find();
        res.send(roleData);
    } catch(err) {
        res.send({ err });
    }
}