const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Alimento = new Schema({
    nombre: {
        nombre: String,
    }
})

module.exports = mongoose.model('Alimento', Alimento);