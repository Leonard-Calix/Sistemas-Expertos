const express = require('express');
const fileUpload = require('express-fileupload');
const Image = require('../modelo/imagenModule');
const conexion = require('../modelo/database');
const app = express();

app.use(fileUpload());

// GUARDAR IMAGENES

app.post('/cargarImage', function(req, res) {

  if (!req.files) {
    return res.status(400).json({ Ok : false , error: 'No se seleciono un archivo'});    
  }

  let archivo = req.files.archivo;
  let nombreCortado = archivo.name.split('.');
  let extension = nombreCortado[nombreCortado.length - 1 ];

  let extenciones = ['jpg','jpeg', 'png', 'pdf'];

  if (extenciones.indexOf( extension ) < 0) {
    return res.status(400).json({ Ok : false , error: 'Extension no valida'});    
  }
  

  // Use the mv() method to place the file somewhere on your server
  archivo.mv(`src/assets/img/${archivo.name}`, function(err) {
    if (err)
      return res.status(500).json(err);

    let imagen = new Image({
      nombre : archivo.name,
      extension : extension,
      url : `src/assets/img/${archivo.name}`
    });

    imagen.save((error, imagen) => {
        
      if (error){
          return res.status(400).json({ Ok : false });
      }

      res.json( { Ok : true , mensaje: 'Imagen subida correctamente', UrlImagen: imagen.url });
  });

  });
});


// OBTENER IMAGENES

app.get('/obtenerImagenes', function(req, res) {

  Image.find({})
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(error);
        res.end();
    });
});


module.exports = app;