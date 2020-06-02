var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var serverIndex = require('serve-index');


var app = express();
app.use(express.static(__dirname + '/'));
app.use('/archivos', serverIndex(__dirname + '/archivos'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('puerto', process.env.PORT || 4300);


// importar rutas

var rutaUpload = require('./routes/cargas');
var rutaUsuario = require('./routes/usuario');
var rutaSitio = require('./routes/sitio');
var rutaImagenes = require('./routes/imagen');
var rutaBlog = require('./routes/blog');
var rutaSCSitio = require('./routes/SCSitio');
var rutaSCblog = require('./routes/SCblog');
var rutaCategoria = require('./routes/categoria');
var rutaComentario = require('./routes/comentario');
var rutaLogin = require('./routes/login');
var busquedaBusqueda = require('./routes/busqueda');
var rutaApp = require('./routes/app');



app.use('/archivos', rutaImagenes);
app.use('/upload', rutaUpload);
app.use('/usuario', rutaUsuario);
app.use('/sitio', rutaSitio);
app.use('/shortcuts/sitio', rutaSCSitio);
app.use('/blog', rutaBlog);
app.use('/shortcuts/blog', rutaSCblog);
app.use('/categoria', rutaCategoria);
app.use('/comentario', rutaComentario);
app.use('/login', rutaLogin);
app.use('/busqueda', busquedaBusqueda);
app.use('/', rutaApp);


app.listen( app.get('puerto') , () => console.log(`Servidor levantado en el puerto ${ app.get('puerto') }`) );


