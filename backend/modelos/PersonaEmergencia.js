const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PersonaEmergencia = new Schema({
    usuario: {
        type: [Schema.Types.ObjectId],
        ref: 'Usuario'
    },
    nombre: {
        type: String,
    },
    email: {
        type: String,
    },
    movil: {
        type: String,
    },
    compania: {
        type: String
    },
    poliza: {
        type: String
    }

});

module.exports = mongoose.model('PersonaEmergencia', PersonaEmergencia);