const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 4000;
const rutasUsuarios = require('./rutas/usuarios');
const rutasAlimentos = require('./rutas/alimentos');
const rutasProductos = require('./rutas/productos');
const multipart = require('connect-multiparty')
const multipartMiddlware = multipart({uploadDir: './uploads'})

app.use(bodyParser.json());
app.use(cors());
app.use('/api/usuarios', rutasUsuarios);
app.use('/api/alimentos', rutasAlimentos);
app.use('/api/productos', rutasProductos);

app.listen(PORT, () => console.log(`Servidor activo ${PORT}`));