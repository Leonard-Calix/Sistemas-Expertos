const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

const Image = require('../modelo/imagenModule');
const conexion = require('../modelo/database');



app.use(fileUpload());

// ============================================
//   Cargar archivos
// ============================================

app.post('/', function (req, res) {


  if (!req.files) {
    return res.status(400).json({ ok: false, error: 'No se seleciono un archivo' });
  }

  let archivo = req.files.archivo;
  let nombreCortado = archivo.name.split('.');
  let extension = nombreCortado[nombreCortado.length - 1];

  let extenciones = ['jpg', 'jpeg', 'png', 'pdf', 'docx', 'mp4'];

  if (extenciones.indexOf(extension) < 0) {
    return res.status(400).json({ Ok: false, error: 'Extension no valida' });
  }

  // Use the mv() method to place the file somewhere on your server
  archivo.mv(`archivos/${archivo.name}`, function (err) {
    if (err)
      return res.status(500).json(err);

    let imagen = new Image({
      nombre: archivo.name,
      extension: extension,
      url: `archivos/${archivo.name}`
    });

    imagen.save((error, imagen) => {

      if (error) {
        return res.status(400).json({ ok: false, error });
      }

      res.json({ ok: true, mensaje: 'Imagen subida correctamente', imagen });

    });

  });

});

module.exports = app;