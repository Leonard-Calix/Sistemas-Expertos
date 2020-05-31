const express = require('express');
const app = express();
router = express.Router();
const Usuario = require('../modelo/usuarioModule');
const conexion = require('../modelo/database');
var bcryptjs = require('bcryptjs');

// ============================================
//   Agregar un usuario
// ============================================

app.post('/', function(req ,res){
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        correo: body.correo,
        direccion: body.direccion,
        contrasenia:  bcryptjs.hashSync(body.contrasenia, 10),
        role: body.role,
    });

    usuario.save((error, usuarioDB) => {
        
        if (error){
            return res.status(400).json({ ok : false });
        }

        res.json( { id : usuarioDB._id });
    });    
});

// ============================================
//   obtener usuarios
// ============================================

app.get('/', function(req ,res){

    let desde = req.query.desde || 0;
    desde = Number(desde);
  
    Usuario.find({role: 'admin'}, { nombre:true, apellido:true, correo: true, direccion: true, _id:true })
    .skip(desde)
    .limit(5)
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (error) => {
        res.send(error);
        res.end();
    });   
});

// ============================================
//   Agregar un clientes
// ============================================

app.get('/clientes', function(req ,res){
 
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

// ============================================
//   Obtener un usuario
// ============================================

app.get('/:id', function(req ,res){

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

// ============================================
//   borrar un usuario
// ============================================

app.delete('/:id', function(req ,res){

    id = req.params.id;
    
    Usuario.remove({_id:id})
    .then( (data) => {
        res.json( { ok : true });
        res.end();
    })
    .catch( (erro) => {
        res.json( { ok : false });
        res.end();
    });   

});

module.exports = app;