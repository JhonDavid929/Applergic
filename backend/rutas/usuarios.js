const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('../config/bbdd');
const Usuario = require('../modelos/Usuario');
const mogoose = require('mongoose');
const multipart = require('connect-multiparty')
const multipartMiddlware = multipart({uploadDir: './uploads'})

app.use(bodyParser.json());
app.use(cors());

const rutasAPI = express.Router();

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

//SUBIR IMAGEN
function recibirImagen(req, res){
    let id = req.params.id;
    if(req.files){
        let filesPath = req.files.imagen.path;
        let fileSplit = filesPath.split('/')
        let fileName = fileSplit[1];

        Usuario.findByIdAndUpdate({_id: id}, {imagen: fileName}, (err, res) => {
            console.log(res)
            if(err){
                res.json({
                    mensaje: "No hay imagen"
                })
            }else{
                res.json({
                    imagen: res
                })
            }
        })
    }else{
        return res.status(200).send({
            message: "NO ha llegado nada"
        })
    }
}

rutasAPI.route("/upload/:id").post(multipartMiddlware, recibirImagen);

//Esta es la funccion de EDITAR Usuario//
rutasAPI.route("/editar/:id").put(function(req,res){
    let editarUsuario = new Usuario(req.body);
    editarUsuario._id = req.params.id;
        Usuario.findById(editarUsuario._id, function(err,user){
        console.log("Usuario EDITADO")
        for(const prop in req.body){
            user[prop] = req.body[prop];
        }
        user.save();
        res.json("FUE EDITADO");  
    }).then(res=>res).catch(err=>err)
});

//SACAR USUARIOS (metodo get para ver los Usuarios que estan en la BBDD)
rutasAPI.route("/").get(function(reqPeticionHttp, resRespuestaHttp){
    Usuario.find(function(err, colecionUsuarios){
        if(err){
            resRespuestaHttp.json(err);
        }else{          
            resRespuestaHttp.json(colecionUsuarios)
        }
    })
})

//LOG IN USUARIOS(Ruta)
rutasAPI.route('/login').post((req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    Usuario.findOne({"email": email, "password": password}, (err, user) => {
        console.log(user);
        if(err){
            res.json({
                valido: "no",
                usuario: user
            }
            );
        }else{
            if(user !== null){
                res.json({
                    valido: "Es valido"
                })
            } else {
                console.log('El email o la contraseña son incorrectos');
                res.json({
                    valido: "incorrecto"
                })
            }
        }
    });
})

module.exports = rutasAPI;