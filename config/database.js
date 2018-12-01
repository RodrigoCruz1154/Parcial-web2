const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI,{
    UseCreateIndex: true,
    useNewUrlParser: true
})
.then(db=>console.log('Conexión hecha (MongoDB)'))
.catch(err=>console.error(err));