const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const Image = require('../modelo/imagenModule');
const conexion = require('../modelo/database');
const path = require('path');
const fs = require('fs');

var app = express();
app.use(fileUpload());

// ============================================
//   Cargar archivos
// ============================================

router.post('/', function (req, res) {

  if (!req.files) {
    return res.status(400).json({ Ok: false, error: 'No se seleciono un archivo' });
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
        return res.status(400).json({ Ok: false });
      }

      res.json({ Ok: true, mensaje: 'Imagen subida correctamente', imagen });

    });

  });
});


// ============================================
//   Obtener imagenes
// ============================================

router.get('/imagenes', function (req, res) {
  let inicio = req.query.inicio || 0;
  inicio = Number(inicio);

  Image.find({ extension: { $in: ["png", "jpg", "jpeg"] } })
    .skip(inicio)
    .limit(3)
    .then((data) => {
      res.send(data);
      res.end();
    })
    .catch((erro) => {
      res.send(error);
      res.end();
    });
});

// ============================================
//   Obtener imagen por documentos
// ============================================

router.get('/documentos', function (req, res) {

  Image.find({ extension: { $in: ["pdf", "docx"] } })
    .then((data) => {
      res.send(data);
      res.end();
    })
    .catch((erro) => {
      res.send(error);
      res.end();
    });
});

/// ============================================
//   Obtener imagen videos
// ============================================

router.get('/videos', function (req, res) {

  Image.find({ extension: 'mp4' })
    .then((data) => {
      res.send(data);
      res.end();
    })
    .catch((erro) => {
      res.send(error);
      res.end();
    });
});


// ============================================
//   Obtener imagen por id
// ============================================

router.get('/imagen/:id', function (req, res) {

  id = req.params.id;

  Image.find({ _id: id })
    .then((data) => {
      res.send(data);
      res.end();
    })
    .catch((erro) => {
      res.send(erro);
      res.end();
    });
});

// ============================================
//   Obtener imagen po nombre
// ============================================

router.get('/:img', function (req, res) {

  img = req.params.img;

  var pathIMagen = path.resolve(__dirname, `../archivos/${img}`);

  if (fs.existsSync(pathIMagen)) {
    res.sendFile(pathIMagen);
  } else {
    var pathINoMagen = path.resolve(__dirname, `../archivos/no-image.png`);
    res.sendFile(pathINoMagen);
  }

});

// ============================================
//   Eliminar archivos
// ============================================

router.delete('/:nombre', (req, res) => {

  res.status(200).json({
    ok: true,
    mensale: 'Funciona'
  });

});


module.exports = router;