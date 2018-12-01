const car = require('../models/car');
const cars = {};
//Muestra todos los carros que hay
cars.mostrar = async function(req,res,next) {
    let cars = await car.find();
    return res.status(200).JSON(cars);
};

//Registra un nuevo carro
cars.registrar = async function(req,res,next){
    let car = new car();
    car.marca = req.body.car;
    car.modelo = req.body.modelo;
    car.annio = req.body.annio;

    try {
        await cars.mostrar();
        return res.status(200).JSON({message:'Carro registrado con éxito'});
    } catch (err) {
       return res.status(500).JSON(err);
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
        await cars.modificar();
        res.status(200).JSON({message: 'Registro modificado con éxito'});
    } catch (error) {
        return res.status(500).JSON(error);
    }
}

//Borrar un registro de un carro
cars.borrar = async function(req,res,next){
    let {id} = req.params;
    await cars.borrar({_id: id});
    res.status(200).JSON({message: 'Se ha eliminado un carro con éxito'});
}

module.exports = cars;