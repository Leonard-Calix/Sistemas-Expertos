const express = require('express');
const Comentario = require('../modelo/comentarioModule');
const conexion = require('../modelo/database');
const app = express();


app.post('/comentario/agregar', function (req, res) {

    let body = req.body;

    let comentario = new Comentario({
        descripcion: body.descripcion,
        blog: body.blog,
        usuario: body.usuario
    });

    comentario.save((error) => {

        if (error) {
            return res.status(400).json({ Ok: false });
        }

        res.json({ Ok: true });
    });

});

app.get('/comentario/obtener', function (req, res) {

    Comentario.find({})
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((erro) => {
            res.send(error);
            res.end();
        });

});


app.delete('/comentario/eliminar/:id', function(req ,res){

    id = req.params.id;

    Comentario.remove({_id:id})
    .then( (data) => {
        res.json( { Ok : true });
        res.end();
    })
    .catch( (erro) => {
        res.json( { Ok : false });
        res.end();
    });   

});

app.get('/comentario/obtener/:blog', function(req ,res){

    blog = req.params.blog;

    Comentario.find({blog: blog})
    .then((data) => {
        res.send(data);
        res.end();
    })
    .catch((erro) => {
        res.send(error);
        res.end();
    });   

});

module.exports = app;