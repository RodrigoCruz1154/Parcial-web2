const mongoose = require('mongoose');

let car = new.mongoose.Schema({
    marca: String,
    modelo: String,
    annio: Number
})

module.exports = mongoose.model('Car',car);