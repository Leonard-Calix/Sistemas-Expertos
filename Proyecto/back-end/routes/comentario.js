const express = require('express');
const Comentario = require('../modelo/comentarioModule');
var router = express.Router();
const conexion = require('../modelo/database');


router.post('/', function (req, res) {

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

router.get('/', function (req, res) {

    let inicio = req.query.inicio || 0;
    inicio = Number(inicio);

    Comentario.find({})
        .skip(inicio)
        .limit(5)
        .then((data) => {

            Comentario.countDocuments((err, cantidad) => {

                res.json({
                    comentarios: data,
                    cantidad
                });
                res.end();

            });

           
        })
        .catch((erro) => {
            res.send(error);
            res.end();
        });

});


router.delete('/:id', function(req ,res){

    id = req.params.id;

    Comentario.remove({_id:id})
    .then( (data) => {
        res.json( { ok : true });
        res.end();
    })
    .catch( (erro) => {
        res.json( { ok : false });
        res.end();
    });   

});

router.get('/:blog', function(req ,res){

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

module.exports = router;