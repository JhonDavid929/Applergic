
//Codigo de prueba.. AHORA ESTA EN EL FICHERO APP.JS




// Creacion del servidor de la Applergic// 
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const PORT = 4000;
// const db = require('./config/bbdd');
// const Usuario = require('./modelos/Usuario');
// const mogoose = require('mongoose');

// app.use(bodyParser.json());
// app.use(cors());

// const rutasAPI = express.Router();
// // //http://127.0.0.1:4000/api/usuarios
// // app.use('/api/usuarios', rutasAPI);

// // app.listen(PORT, () => console.log(`Servidor activo ${PORT}`));

// //CREAR ALIMENTOS

// function recibirDatosDeAlimentoPost(req, res){
//     console.log("La peticion Http esta siendo procesada");
//     let nuevoAlimento = new Alimento(req.body)
//     let procesadaGuardado = nuevoAlimento.save()
//     procesadaGuardado.then(Alimento =>{
//         console.log("Alimento registrado en base de datos ");

//         res.status(200).json({"alimento": "CREADO CON EXITO (Applergic)"   

//         })
//     }) 
//     procesadaGuardado.catch( err => {
//         console.log("EL ALIMENTO NO HA SIDO GUARDADO")
//         res.status(400).send("EL REGISTRO DEL ALIMENTO HA FALLADO")
//     })
//     console.log("la peticion HTTP ha sido PROCESADA");

// }   
// rutasAPI.route("alimento").post(recibirDatosDeAlimentoPost)


