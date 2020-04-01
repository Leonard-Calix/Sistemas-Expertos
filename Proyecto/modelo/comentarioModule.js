const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ComentarioSchema = new Schema({
    descripcion  : {
        type: String
    },
    blog : {
        type: String
    },
    usuario  : {
        type: String
    }  
});

module.exports = mongoose.model('Comentario', ComentarioSchema);