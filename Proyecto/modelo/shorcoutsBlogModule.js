const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let shorcoutsSchema = new Schema({
    shortcut : {
        type: String
    },
    blog : {
        type: String
    }
});

module.exports = mongoose.model('ShorcoutsBlog', shorcoutsSchema);
