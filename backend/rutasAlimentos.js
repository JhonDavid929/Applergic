const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 4000;
const db = require('./config/bbdd');
const Usuario = require('./modelos/Usuario');

app.use(bodyParser.json());
app.use(cors());

const rutasAPI = express.Router();
//http://127.0.0.1:4000/api/alimentos
app.use('/api/alimentos', rutasAPI);

rutasAPI.route('/registro').post((req, res) => {
    //Deberíamos recibir un JSON con el nuevo usuario, así que creamos un obj Schema y le pasamos el JSON ya convertido en obj de JS (bodyParser)
    let nuevoUsuario = new Usuario(req.body);
    console.log(nuevoUsuario.email)

    Usuario.findOne({email: nuevoUsuario.email}, (err, usuarioRegistrado) => {
        if(usuarioRegistrado){
            console.log('El usuario ya se encuentra registrado')
        } else {
            //Devuelve una promesa
            nuevoUsuario.save().then((usuario) => {
                console.log('Registrado');
                res.status(200).json({
                    'usuario': 'Creado satisfactoriamente'
                })
            }).catch((err) => {
                console.log('Falloooo');
                res.status(400).send('El registro ha fallado');
            });
            console.log('La request ha sido procesada');
        }
    })
})

