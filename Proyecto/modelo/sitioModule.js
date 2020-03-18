const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let sitioSchema = new Schema({
    titulo : {
        type: String
    },
    tituloMenu  : {
        type: String
    } ,
    url  : {
        type: String
    },
    encabezado: {
        type: Boolean
    },
    menu: {
        type: Boolean
    },
    footer: {
        type: Boolean
    },
    breadcrumb :{
        type: Boolean
    }
});

module.exports = mongoose.model('Sitio', sitioSchema);

