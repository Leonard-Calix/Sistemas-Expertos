const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let shorcoutsSchema = new Schema({
    titulo : {
        type: String
    },
    imagen : {
        type: String
    },
    posts : {
        type: Array
    },
    blog : {
        type: String
    }
});

module.exports = mongoose.model('ShorcoutsBlog', shorcoutsSchema);
