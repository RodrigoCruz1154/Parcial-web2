const car = require('../models/car');
const cars = {};
//Muestra todos los carros que hay
cars.mostrar = async function(req,res,next) {
    let cars = await car.find();
    return res.status(200).JSON(cars);
}