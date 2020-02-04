const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('../config/bbdd');
const Producto = require('../modelos/Producto');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

const rutasAPI = express.Router();

//CREAR PRODUCTO
rutasAPI.route('/registro').post((req, res) => {

    let productoNuevo = new Producto(req.body);

    Producto.findOne({codigoBarras: productoNuevo.codigoBarras}, (err, registrado) => {
        if(registrado){
            console.log('El usuario ya se encuentra registrado')
        } else {
            productoNuevo.save().then((producto) => {
                console.log('Registrado');
                res.status(200).json({
                    'producto': 'Creado satisfactoriamente'
                })
            }).catch((err) => {
                console.log('Falloooo');
                res.status(400).send('El registro ha fallado');
            });
        }
    })
})

//SACAR PRODUCTOS
rutasAPI.route("/").get((req, res) => {
    Producto.find((err, productos) => {
        if(err){
            console.log(err);
        }else{  
            res.json(productos)
        }
    })
})

//SACAR PRODUCTO POR CODIGO DE BARRAS
rutasAPI.route("/:codigo").get((req, res) => {
    let codigo = req.params.codigo;
    console.log(codigo)
    Producto.findOne({codigoBarras: codigo}, (err, product) => {
        if(err){
            res.json({
                mensaje: "No se ha encontrado"
            })
        } else {
            res.json(product);
        }
    })
})

module.exports = rutasAPI;