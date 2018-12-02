const car = require('../models/car');
const cars = {};
//Muestra todos los carros que hay
cars.mostrar = async function(req,res,next) {
    let cars = await car.mostrar;
    return res.status(200).json(cars);
};

//Registra un nuevo carro
cars.registrar = async function(req,res,next){
    let carro = new car(
    car.marca = req.body.car,
    car.modelo = req.body.modelo,
    car.annio = req.body.annio,
    )
    try {
        await cars.registrar;
        return res.status(200).json({message:'Carro registrado con éxito'});
    } catch (err) {
       return res.status(500).json(err);
    }
}

//Modificar un registro de un carro
cars.modificar = async function(req,res,next){
    let { id }= req.params;
    let car ={
        marca: req.body.car,
        modelo: req.body.modelo,
        annio: req.body.annio
    }
    console.log(car);
    try {
        await cars.modificar;
        res.status(200).json({message: 'Registro modificado con éxito'});
    } catch (error) {
        return res.status(500).json(error);
    }
}

//Borrar un registro de un carro
cars.borrar = async function(req,res,next){
    let {id} = req.params;
    await cars.borrar({_id: id});
    res.status(200).json({message: 'Se ha eliminado un carro con éxito'});
}

module.exports = cars;