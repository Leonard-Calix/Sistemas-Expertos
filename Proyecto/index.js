var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.static('public'));//use se utiliza para ejecutar middlewares
app.use(cors());

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