var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');


var app = express();
app.use(express.static('public'));//use se utiliza para ejecutar middlewares
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.use( require( './routes/usuario' ) );
app.use( require( './routes/sitio' ) );
app.use( require( './routes/imagen' ) );
app.use( require( './routes/blog' ) );
app.use( require( './routes/SCSitio' ) );
app.use( require( './routes/SCblog' ) );
app.use( require( './routes/categoria' ) );
app.use( require( './routes/comentario' ) );




app.listen('4300',function(){
    console.log('Servidor levantado...')
});

