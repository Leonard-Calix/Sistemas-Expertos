const express = require('express');
const app = express();
const Sitio = require('../modelo/sitioModule');
const conexion = require('../modelo/database');


app.post('/sitio/agregar', function(req ,res){
    let body = req.body;

    let sitio = new Sitio({
        titulo: body.titulo,
        tituloMenu : body.tituloMenu,
        url : body.url,
        encabezado : body.encabezado,
        footer : body.footer,
        menu : body.menu,
        breadcrumb: body.breadcrumb,
    });

    sitio.save((error, sitioDb) => {
        
        if (error){
            return res.status(400).json(error);
        }

        res.json(sitioDb);
    });    
});


app.get('/sitios', function(req ,res){

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


app.get('/sitio/obtener/:id', function(req ,res){

    id = req.params.id;
    console.log(id);

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

app.get('/sitio/eliminar/:id', function(req ,res){

    id = req.params.id;
    console.log(id);

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

module.exports = app;