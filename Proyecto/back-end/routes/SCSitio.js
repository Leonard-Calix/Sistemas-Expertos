const express = require('express');
const router = express.Router();
const ShorcoutSitio = require('../modelo/shorcoutsSitioModule');
const conexion = require('../modelo/database');

router.post('/', function(req ,res){
    let body = req.body;

    let shortcuts = new ShorcoutSitio({
        shortcut : body.shortcut,
        sitio : body.sitio
    });

    shortcuts.save((error, shorcoutDB) => {
        
        if (error){
            return res.status(400).json(error);
        }

        res.json(shorcoutDB);
    });    
});

router.delete('/:id', function(req ,res){

    id = req.params.id;

    ShorcoutSitio.remove({_id:id})
    .then( (data) => {
        res.json( { Ok : true });
        res.end();
    })
    .catch( (erro) => {
        res.json( { Ok : false });
        res.end();
    });   

});

router.get('/:id', function(req ,res){

    id = req.params.id;

    ShorcoutSitio.find({sitio:id})
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(erro);
        res.end();
    });   
});




module.exports = router;