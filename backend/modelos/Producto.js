const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Producto = new Schema({
    nombre: {
        type: String
    },
    ingredientes: {
        type: Array
    },
    codigoBarras: {
        type: String
    }
})

module.exports = mongoose.model('Producto', Producto);