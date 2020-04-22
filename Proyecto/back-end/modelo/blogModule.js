const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let blogSchema = new Schema({
    nombre : {
        type: String
    },
    categoria  : {
        type: String
    },
    urlImagen: {
        type: String
    },
    comentarios :{
        type: Boolean
    },
    usuario: {
        type: String
    }
});



module.exports = mongoose.model('Blog', blogSchema);