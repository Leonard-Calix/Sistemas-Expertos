const express = require('express');
const Categoria = require('../modelo/categoriaModule');
const conexion = require('../modelo/database');
const router = express.Router();


router.post('/', function (req, res) {

    let body = req.body;

    let categoria = new Categoria({
        nombre: body.nombre,
        descripcion: body.descripcion
    });

    categoria.save((error, categoriaDB) => {

        if (error) {
            return res.status(400).json({ Ok: false });
        }

        res.json({ Ok: true, categoria: categoriaDB });
    });
});

router.get('/', function (req, res) {

    Categoria.find({})
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((erro) => {
            res.send(error);
            res.end();
        });
});

router.delete('/:id', function (req, res) {

    id = req.params.id;


    Categoria.remove({ _id: id })
        .then((data) => {
            res.json({ Ok: true });
            res.end();
        })
        .catch((erro) => {
            res.json({ Ok: false });
            res.end();
        });

});


module.exports = router;
