const car = require('../models/car');
const cars = {};

cars.showCars(async function(req,res,next){
    let cars= await car.find();
    return res.status(200).JSON(cars);
});