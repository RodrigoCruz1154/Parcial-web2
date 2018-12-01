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
    car.marca = req.body.marca;
    car.modelo = req.body.modelo;
    car.annio = req.body.annio;

    try {
        await car.save();
        return res.status(200).JSON({message:'Carro registrado con éxito'});
    } catch (err) {
       return res.status(500).JSON(err);
    }
}