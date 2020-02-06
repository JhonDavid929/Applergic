const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('../config/bbdd');
const Usuario = require('../modelos/Usuario');
const Alimento = require('../modelos/Alimento');
const mongoose = require('mongoose');
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

        res.status(200).json({
            usuario: Usuario._id
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

//SACAR USUARIOS
rutasAPI.route("/").get((req, res) => {
    Usuario.find({}, (err, usuarios) => {
        console.log(usuarios+'stop')
        Alimento.populate(usuarios, {path: "alimentos"}, (err, usuario) => {
            console.log(usuario)
            if(err){
                res.json(err);
            }else{
                console.log(usuario)
                res.json(usuario)
            }
        })
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
                valido: "El email o la contraseña con incorrectos",
                usuario: user
            }
            );
        }else{
            if(user !== null){
                res.json({
                    valido: "Es valido",
                    usuario: user
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

//BUSCAR USUARIO E INSERTARLE ALERGIAS
rutasAPI.route("/insertar-alimento/:id").put((req, res) => {
    let id = req.params.id;
    let alimentos = req.body;
    console.log(alimentos.alimentos);
    console.log("Que carajo pasa")
    Usuario.findById(id, (err, user) => {
        console.log(user);
        if(err){
            res.json({
                valido: "incorrecto"
            })
        }else{
            let alimentosUser = user.alimentos;
            console.log("Usuario alimentos"+alimentosUser);
            for(let i = 0; i < alimentos.alimentos.length; i++){
                if(alimentosUser.includes(alimentos.alimentos[i])){
                    console.log("Este producto ya existe")
                }else{
                    alimentosUser.push(alimentos.alimentos[i]);
                }
            }
            user.save();
            res.json({
                valido: "correcto",
                usuario: user
            });
        }
    })
})

module.exports = rutasAPI;