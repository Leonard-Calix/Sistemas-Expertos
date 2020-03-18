const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ImagenSchema = new Schema({
    nombre : {
        type: String
    },
    extension  : {
        type: String
    } ,
    url  : {
        type: String
    }
});

module.exports = mongoose.model('Imagen', ImagenSchema);