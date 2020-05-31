const express = require('express');
const Comentario = require('../modelo/comentarioModule');
var router = express.Router();
const conexion = require('../modelo/database');


router.get('/:parametro', function (req, res) {

    var parametro = req.params.parametro;
    var regex = new RegExp( parametro, 'i' );

    Comentario.find({ descripcion: regex },{} )
    .then((data) => {
        res.send(data);
        res.end();
    })
    .catch((error) => {
        res.send(error);
        res.end();
    }); 

});


module.exports = router;