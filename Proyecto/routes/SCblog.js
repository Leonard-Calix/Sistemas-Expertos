const express = require('express');
const app = express();
const ShorcoutsBlog = require('../modelo/shorcoutsBlog');
const conexion = require('../modelo/database');

app.post('/shortcuts/blog/agregar', function(req ,res){
    let body = req.body;

    let shortcuts = new ShorcoutsBlog({
        shortcut : body.shortcut,
        blog : body.sitio
    });

    shorcout.save((error, shorcoutDB) => {
        
        if (error){
            return res.status(400).json(error);
        }

        res.json(shorcoutDB);
    });    
});

