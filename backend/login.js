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
//http://127.0.0.1:4000/api/usuarios
app.use('/api/usuarios', rutasAPI);

rutasAPI.route('/').get((req,res) => {
   console.log("API FUNCIONANDO!");
});

//CREAR USUARIO JAIME
// rutasAPI.route('/registro').post((req, res) => {
//     let nuevoUsuario = new Usuario(req.body);

//     nuevoUsuario.save().then((usuario) => {
//         console.log('Registrado');
//         res.status(200).json({
//             'usuario': 'Creado satisfactoriamente'
//         })
//     }).catch((err) => {
//         console.log('Falloooo');
//         res.status(400).send('El registro ha fallado');
//     });
//     console.log('La request ha sido procesada');
// })

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