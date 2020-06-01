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
//   Obtener imagenes
// ============================================

router.get('/imagenes', function (req, res) {

  let inicio = req.query.inicio || 0;
  inicio = Number(inicio);

  Image.find({ extension: { $in: ["png", "jpg", "jpeg"] } })
    .skip(inicio)
    .limit(3)
    .then((data) => {

      Image.countDocuments((error, cantidad)=> {
        res.json( { imagenes: data, cantidad} );
        res.end();
      });
      
    })
    .catch((error) => {
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

  Image.findOne({ _id: id })
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