const express = require('express');
const router = express.Router();
const Sitio = require('../modelo/sitioModule');
const conexion = require('../modelo/database');


router.post('/', function(req ,res){
    let body = req.body;

    let sitio = new Sitio({
        titulo: body.titulo,
        tituloMenu : body.tituloMenu,
        url : body.url,
        descripcion : body.descripcion,
        encabezado : body.encabezado,
        footer : body.footer,
        menu : body.menu,
        breadcrumb: body.breadcrumb,
        usuario: body.usuario

    });

    sitio.save((error, sitioDb) => {
        
        if (error){
            return res.status(400).json(error);
        }

        res.json(sitioDb);
    });    
});


router.get('/', function(req ,res){

    let desde = req.query.desde || 0;
    desde = Number(desde);
  
    Sitio.find({})
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(error);
        res.end();
    });   
});


router.get('/:id', function(req ,res){

    id = req.params.id;

    Sitio.find({_id:id})
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(erro);
        res.end();
    });   
});

router.get('/:id', function(req ,res){

    id = req.params.id;

    Sitio.remove({_id:id})
    .then( (data) => {
        res.json( { Ok : true });
        res.end();
    })
    .catch( (erro) => {
        res.json( { Ok : false });
        res.end();
    });   

});

router.get('/usuario/:usuario', function(req ,res){

    idUsuario = req.params.usuario;

    Sitio.find({usuario:idUsuario})
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