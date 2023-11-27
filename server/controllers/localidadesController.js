const {collections} = require('../db');

exports.getAll = async () => {
    try {
        const localidades = await collections.Localidades.find({}).toArray();
        return localidades;
    }catch(err){
        throw new Error(err)
    }
};

exports.getByName = async (cityName) => {
    try{
        const localidades = await collections.Localidades.find({ ciudad: { $regex: new RegExp(cityName, 'i') } }).toArray();
        return localidades;
    }catch(err){
        throw new Error(err)
    }
};