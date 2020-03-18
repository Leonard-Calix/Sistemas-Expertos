const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let blogSchema = new Schema({
    nombre : {
        type: String
    },
    url  : {
        type: String
    } ,
    descripcion  : {
        type: String
    },
    urlImage: {
        type: String
    },
    comentarios :{
        type: Boolean
    }
});



module.exports = mongoose.model('Blog', blogSchema);