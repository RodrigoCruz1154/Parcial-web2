const car = require('../models/car');
const cars = {};

cars.showCars(async function(req,res,next){
    let cars= await car.find();
    return res.status(200).JSON(cars);
});

cars.save(async function(req,res,next){
    let carro = new car();
    carro.marca = req.body.marca;
    carro.modelo = req.body.modelo;
    carro.annio = req.body.annio;
    try {
        await save();
        return res.status(200).JSON({message: 'Carro registrado'});
    } catch (error) {
        return res.status(500).JSON({message: 'Ha ocurrido un problema al momento de registrar su carro'});
    }
});