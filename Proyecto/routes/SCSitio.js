const express = require('express');
const app = express();
const ShorcoutsSitio = require('../modelo/shorcoutsSitio');
const conexion = require('../modelo/database');

app.post('/shortcuts/sitio/agregar', function(req ,res){
    let body = req.body;

    let shortcuts = new ShorcoutsSitio({
        shortcut : body.shortcut,
        sitio : body.blog
    });

    shortcuts.save((error, shorcoutDB) => {
        
        if (error){
            return res.status(400).json(error);
        }

        res.json(shorcoutDB);
    });    
});

