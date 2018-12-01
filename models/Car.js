const mongoose = require('mongoose');

let car = new.mongoose.Schema({
    marca: String,
    Modelo: String,
    Año: Number
})

module.exports = mongoose.model('Car',car);