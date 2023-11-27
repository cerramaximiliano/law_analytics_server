const localidadesControllers = require('../controllers/localidadesController');


const searchByName = async (req, res) => {
    const {city} = req.query
    try{
        const localidades = await localidadesControllers.getByName(city);
        res.status(200).json({
            localidades
        })
    }catch(err){
        res.status(500).json({
            ok: false,
            error: err.message
        })
    }

};

const getAllLocalidades = async (req, res) => {
    try{
        const localidades = await localidadesControllers.getAll();
        res.status(200).json({
            localidades
        })
    }catch(err){
        res.status(500).json({
            ok: false,
            error: err.message
        })
    }
};

module.exports = {getAllLocalidades, searchByName};