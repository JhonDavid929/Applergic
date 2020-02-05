const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Usuario = new Schema({
    nombre: {
        type: String,
    },
    email: {
        type: String,
    },
    movil: {
        type: String,
    },
    password: {
        type: String,
    },
    imagen: {
        type: String,
    },
    alimentos:{
        type: [Schema.Types.ObjectId],
        ref: 'Alimento'
    },
});

module.exports = mongoose.model('Usuario', Usuario);