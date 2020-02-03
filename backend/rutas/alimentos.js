const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('../config/bbdd');
const Alimento = require('../modelos/Alimento');
const mogoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

const rutasAPI = express.Router();

//CREAR ALIMENTOS.. Esta es la funcion para crear los alimento en la base de datos(moogo)
function recibirDatosDeAlimentoPost(req, res){
    console.log("La peticion Http esta siendo procesada");
    let nuevoAlimento = new Alimento(req.body)
    let procesadaGuardado = nuevoAlimento.save()
    procesadaGuardado.then(Alimento =>{
        console.log("Alimento registrado en base de datos ");

        res.status(200).json({"alimento": "CREADO CON EXITO (Applergic)"   

        })
    }) 
    procesadaGuardado.catch( err => {
        console.log("EL ALIMENTO NO HA SIDO GUARDADO")
        res.status(400).send("EL REGISTRO DEL ALIMENTO HA FALLADO")
    })
    console.log("la peticion HTTP ha sido PROCESADA");
}   
rutasAPI.route("/registro").post(recibirDatosDeAlimentoPost)

//SACAR Alimentos (metodo get para ver los Alimentos que estan en la BBDD)
rutasAPI.route("/").get(function(reqPeticonHttp, resRespuestaHttp){
    Alimento.find(function(err, colecionAlimentos){
        if(err){
            console.log(err);
        }else{
            
            resRespuestaHttp.json(colecionAlimentos)
        }
    })
})

//SACAR ALIMENTOS POR LETRA
rutasAPI.route('/:letra').get((req, res) => {
    let letra = req.params.letra;
    console.log(letra)

    Alimento.find({nombre: new RegExp(`^${letra}`, "gi")}, (err, alimentos) => {
        if(err){
            console.log(err);
            res.json(err);
        }else{
            console.log(alimentos);
            res.json(alimentos);
        }
    })
})

module.exports = rutasAPI;