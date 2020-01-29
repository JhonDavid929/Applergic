const mongoose = require('mongoose');

//Conexión a la bbdd
mongoose.connect('mongodb://127.0.0.1:27017/applergic');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('CONECTADO A LA BBDD!!')
});

module.exports = db;