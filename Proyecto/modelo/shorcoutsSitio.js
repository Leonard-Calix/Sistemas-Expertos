const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let shorcoutsSchema = new Schema({
    shortcut : {
        type: String
    },
    sitio: {
        type: String
    }
});

module.exports = mongoose.model('ShorcoutsSitio', shorcoutsSchema);
