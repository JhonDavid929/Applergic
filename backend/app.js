const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 4000;
const db = require('./config/bbdd');
const Usuario = require('./modelos/Usuario');
// const login = require('./login');
// const usu = require('./crearusuario');
const mogoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

const rutasAPI = express.Router();
//http://127.0.0.1:4000/api/usuarios
app.use('/api/usuarios', rutasAPI);

//CREAR USUARIOS
function recibirDatosRegistroPost(req, res){
    console.log("La peticion Http esta siendo procesada");
    let nuevoUsuario = new Usuario(req.body)
    let promesaGuardado = nuevoUsuario.save()
    promesaGuardado.then(Usuario => {
        console.log("Se ha registrado en base de datos ");

        res.status(200).json({ "usuario": "CREADO SATISFACTORIAMENTE Applergic"

        })
    })
    promesaGuardado.catch(err =>{
        console.log(" EL USUARIO HA FALLADO");
        res.status(400).send("EL REGISTRO HA FALLADO")
    })
    console.log("La peticion HTTP ha sido procesada");


}
rutasAPI.route("/registro").post(recibirDatosRegistroPost)

//SACAR USUARIOS
rutasAPI.route("/").get(function(reqPeticonHttp, resRespuestaHttp){
    Usuario.find(function(err, colecionUsuarios){
        if(err){
            console.log(err);
        }else{
            
            resRespuestaHttp.json(colecionUsuarios)
        }
    })
})

//LOG IN
rutasAPI.route('/login').post((req, res) => {
    let correo = req.body.email;
    let password = req.body.password;

    Usuario.findOne({email: correo}, (err, user) => {
        console.log(user);
        if(user.password === password){
            console.log('Bienvenido');
            res.json({
                mensaje: 'ok'
            })
        } else {
            console.log('El email o la contraseña con incorrectos');
            res.json(err)
        }
    });
})

app.listen(PORT, () => console.log(`Servidor activo ${PORT}`));