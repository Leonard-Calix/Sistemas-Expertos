const express = require('express');
const app = express();
const Usuario = require('../modelo/usuarioModule');
const conexion = require('../modelo/database');


app.post('/usuario/agregar', function(req ,res){
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        correo: body.correo,
        direccion: body.direccion,
        contrasenia: body.contrasenia,
        role: body.role,
    });

    usuario.save((error, usuarioDB) => {
        
        if (error){
            return res.status(400).json({ Ok : false });
        }

        res.json( { Ok : true });
    });    
});



app.get('/usuarios', function(req ,res){

    let desde = req.query.desde || 0;
    desde = Number(desde);
  
    Usuario.find({role: 'admin'})
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(error);
        res.end();
    });   
});

app.get('/usuarioClientes', function(req ,res){
 
    Usuario.find({role: 'normal'})
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(error);
        res.end();
    });   
});



app.get('/usuario/obtener/:id', function(req ,res){

    id = req.params.id;
    
    Usuario.find({_id:id})
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(erro);
        res.end();
    });   
});

app.delete('/usuario/eliminar/:id', function(req ,res){

    id = req.params.id;
    
    Usuario.remove({_id:id})
    .then( (data) => {
        res.json( { Ok : true });
        res.end();
    })
    .catch( (erro) => {
        res.json( { Ok : false });
        res.end();
    });   

});


app.post('/usuario/admin/login', function(req ,res){
  
    let body = req.body;

    Usuario.find({role: 'admin', correo: body.correo, contrasenia: body.contrasenia })
    .then( (data) => {
        res.send(data);
        //res.send({ 'idUsuario' : data[0]._id });
        res.end();
    })
    .catch( (erro) => {
        res.send(error);
        res.end();
    });   
});

app.post('/usuario/cliente/login', function(req ,res){
  
    let body = req.body;

    Usuario.find({role: 'normal', correo: body.correo, contrasenia: body.contrasenia })
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(error);
        res.end();
    });   
});

module.exports = app;