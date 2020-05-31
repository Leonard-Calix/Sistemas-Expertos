const express = require('express');
const router = express.Router();
const ShorcoutsBlog = require('../modelo/shorcoutsBlogModule');
const Image = require('../modelo/imagenModule');
const conexion = require('../modelo/database');

router.post('/', function (req, res) {
    let body = req.body;

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

router.get('/:idBlog', function (req, res) {

    id = req.params.idBlog;

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


router.put('/', function (req, res) {

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


module.exports = router;
