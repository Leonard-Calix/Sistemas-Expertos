const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre : {
        type: String
    },
    apellido  : {
        type: String
    } ,
    correo  : {
        type: String
    },
    direccion: {
        type: String
    },
    contrasenia: {
        type: String
    },
    role :{
        type: String
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);