const express = require('express');
const app = express();
const ShorcoutsBlog = require('../modelo/shorcoutsBlogModule');
const conexion = require('../modelo/database');

app.post('/shortcuts/blog/agregar', function (req, res) {
    let body = req.body;

    let shortcut = new ShorcoutsBlog({
        shortcut: body.shortcut,
        blog: body.blog
    });

    shortcut.save((error, shorcoutDB) => {

        if (error) {
            return res.status(400).json(error);
        }

        res.json(shorcoutDB);
    });
});

app.get('/shortcuts/blog/obtener/:id', function (req, res) {

    id = req.params.id;

    ShorcoutsBlog.find({blog: id}, {shortcut: true})
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(erro);
        res.end();
    });
});

app.post('/shortcuts/blog/editar', function (req, res) {

    ShorcoutsBlog.update( {blog: req.body.blog}, {shortcut : req.body.shortcut })
    .then( (data) => {
        res.send({ ok: true });
        res.end();
    })
    .catch( (erro) => {
        res.send(erro);
        res.end();
    });
});




module.exports = app;
