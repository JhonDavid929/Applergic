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
const Alimento = require("./modelos/Alimento");

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
rutasAPI.route("/alimento").post(recibirDatosDeAlimentoPost)

//SACAR Alimentos (metodo get para ver los Alimentos que estan en la BBDD)
rutasAPI.route("/alimento").get(function(reqPeticonHttp, resRespuestaHttp){
    Alimento.find(function(err, colecionAlimentos){
        if(err){
            console.log(err);
        }else{
            
            resRespuestaHttp.json(colecionAlimentos)
        }
    })
})




rutasAPI.route("/registro").post(recibirDatosRegistroPost)

//SACAR USUARIOS (metodo get para ver los Usuarios que estan en la BBDD)
rutasAPI.route("/").get(function(reqPeticonHttp, resRespuestaHttp){
    Usuario.find(function(err, colecionUsuarios){
        if(err){
            console.log(err);
        }else{
            
            resRespuestaHttp.json(colecionUsuarios)
        }
    })
})

//LOG IN (Ruta)
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