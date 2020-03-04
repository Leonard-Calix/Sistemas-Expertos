var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser')
var database = require('./modelo/database');

app.use(express.static('public'));//use se utiliza para ejecutar middlewares
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

app.listen('4300',function(){
    console.log('Servidor levantado...')
});

app.get('/usuario', function(req ,res){
    res.json({'mensaje' : 'Respuesta del servidor de Node'});
});

app.get('/obtenerUsuario', function(req ,res){
    res.json({'mensaje' : 'Respuesta del servidor de Node, para obtener usuarios'});
});

app.get('/buscarUsuario', function(req ,res){
    res.json({'mensaje' : 'Respuesta del servidor de Node, para buscar usuario'});
});

app.get('/login', function(req ,res){
    res.json({'mensaje' : 'Respuesta del servidor de Node, para hacer login'});
});

app.post('/cargarImagen', function(req ,res){
    //res.json({'mensaje' : 'Listo para guardar imagen' , 'nombreArchivo' : req.body.nombre , 'FormatoArchivo' : req.body.tipo});
    res.json(req.body);
    res.json({'mensaje' : 'Imgen guardada corectamente' , 'status' : 'Ok'});
});

app.get('/getImagenes', function(req ,res){
    //res.json({'mensaje' : 'Listo para guardar imagen' , 'nombreArchivo' : req.body.nombre , 'FormatoArchivo' : req.body.tipo});
    //res.json(req.body);
    res.json({'mensaje' : 'Metodo para otener imagenes'});
});