const express = require('express');
const router = express.Router();
const Usuario = require('../modelo/usuarioModule');
const conexion = require('../modelo/database');
var bcryptjs = require('bcryptjs');


router.post('/administrador', (req, res) => {

    let body = req.body;

    Usuario.findOne({ correo: body.correo }, {})
        .then((usuario) => {
            
            if (!usuario) {
                return res.status(400).json({
                    ok: false,
                });
            }

            if (!bcryptjs.compareSync(body.contrasenia, usuario.contrasenia)) {
                return res.status(400).json({
                    ok: false,
                });
            }

            res.status(200).json({
                ok: true,
                id: usuario._id
            });
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});

router.post('/cliente', (req, res) => {

    let body = req.body;

    Usuario.findOne({ correo: body.correo }, {})
        .then((usuario) => {
            
            if (!usuario) {
                return res.status(400).json({
                    ok: false,
                    usuario
                });
            }

            if (!bcryptjs.compareSync(body.contrasenia, usuario.contrasenia)) {
                return res.status(200).json({
                    ok: false
                });
            }

            res.status(200).json({
                ok: true,
                id: usuario._id
            });
        })
        .catch((erro) => {
            res.send(erro);
            res.end();
        });
});


module.exports = router;
