const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('../config/bbdd');
const PersonaEmergencia = require('../modelos/PersonaEmergencia');
const Usuario = require('../modelos/Usuario');

const mogoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

const rutasAPI = express.Router();

//CREAR PERSONA DE EMERGENCIA
function recibirDatosRegistroPost(req, res){
    let request = new PersonaEmergencia(req.body)
    console.log(request)
    let persona = request.save()
    persona.then(emergencia => {
        console.log(emergencia)
        res.status(200).json({ "emergencia": "CREADO SATISFACTORIAMENTE Applergic"
        })
    })
    persona.catch(err =>{
        res.status(400).send("EL REGISTRO HA FALLADO")
    })
}
rutasAPI.route("/registro").post(recibirDatosRegistroPost)

//SACAR PERSONAS DE EMERGENCIA
rutasAPI.route("/").get((req, res) => {
    PersonaEmergencia.find({}, (err, contactos) => {
        console.log(contactos+'stop')
        Usuario.populate(contactos, {path: "usuario"}, (err, contacto) => {
            console.log(contacto)
            if(err){
                res.json(err);
            }else{
                res.json(contacto)
                console.log(typeof contacto)
            }
        })
    })
})

module.exports = rutasAPI;