var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static('public'));//use se utiliza para ejecutar middlewares
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use( require( './routes/usuario' ) );



app.listen('4300',function(){
    console.log('Servidor levantado...')
});



/* ===============================Usuario========================================= */


