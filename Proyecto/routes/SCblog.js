const express = require('express');
const app = express();
const ShorcoutsBlog = require('../modelo/shorcoutsBlogModule');
const Image = require('../modelo/imagenModule');
const conexion = require('../modelo/database');

app.post('/shortcuts/blog/agregar', function (req, res) {
    let body = req.body;
    let urlImagen = '';

    Image.find({ _id: body.imagen })
        .then((data) => {

            let shortcut = new ShorcoutsBlog({
                titulo: body.titulo,
                imagen: data[0].url,
                posts: body.posts,
                blog: body.blog
            });

            shortcut.save((error, shorcoutDB) => {

                if (error) {
                    return res.status(400).json(error);
                }

                res.json(shorcoutDB);
            });


        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });


    /*
        if (urlImagen) {
    
            let shortcut = new ShorcoutsBlog({
                titulo: body.titulo,
                imagen: body.imagen,
                posts: body.posts,
                blog: body.blog
            });
    
            shortcut.save((error, shorcoutDB) => {
    
                if (error) {
                    return res.status(400).json(error);
                }
    
                res.json(shorcoutDB);
            });
    
        }
    */

});

app.get('/shortcuts/blog/obtener/:id', function (req, res) {

    id = req.params.id;

    ShorcoutsBlog.find({ blog: id })
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});

app.post('/shortcuts/blog/editar', function (req, res) {

    ShorcoutsBlog.update({ blog: req.body.blog }, { shortcut: req.body.shortcut })
        .then((data) => {
            res.send({ ok: true });
            res.end();
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});


function obtenerImagen(id, Image) {

    Image.find({ _id: id })
        .then((data) => {
            return data[0].url;
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
}


module.exports = app;
