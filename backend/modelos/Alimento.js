const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Alimento = new Schema({
    nombre: {
        type: String,
    }
})

module.exports = mongoose.model('Alimento', Alimento);