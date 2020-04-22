const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CategoriaSchema = new Schema({
    nombre : {
        type: String
    },
    descripcion  : {
        type: String
    } 
});

module.exports = mongoose.model('Categoria', CategoriaSchema);