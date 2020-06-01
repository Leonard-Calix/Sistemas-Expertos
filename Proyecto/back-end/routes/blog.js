const express = require('express');
const Blog = require('../modelo/blogModule');
const conexion = require('../modelo/database');
const router = express.Router();


// ============================================
//   Guardar blog
// ============================================

router.post('/', function(req, res) {

  let body = req.body;

  let blog = new Blog({
      nombre: body.nombre,
      categoria: body.categoria,
      urlImagen: body.urlImagen,
      comentarios: body.comentarios,
      usuario: body.usuario
  });

  blog.save((error, blog) => {
      
      if (error){
          return res.status(400).json({ Ok : false });
      }

      res.json( { Ok : true, id : blog._id  });
  }); 

});

// ============================================
//   Obtener blogs
// ============================================

router.get('/', function(req ,res){


  Blog.find({})
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
//   Obtener blog por id
// ============================================

router.get('/:id', function(req ,res){

    id = req.params.id;

    Blog.find({_id:id})
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
//   Eliminar blog por el id
// ============================================

router.delete('/:id', function(req ,res){

    id = req.params.id;

    Blog.remove({_id:id})
    .then( (data) => {
        res.json( { Ok : true });
        res.end();
    })
    .catch( (erro) => {
        res.json( { Ok : false });
        res.end();
    });   

});

// ============================================
//   Obtener blog de usuario
// ============================================

router.get('/usuario/:usuario', function(req ,res){

    id = req.params.usuario;

    Blog.find({ usuario: id})
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
//   Obtener blog por categoria
// ============================================

router.get('/categoria/:categoria', function(req ,res){

    let parametro = req.params.categoria;
    let regex = new RegExp( parametro, 'i' );

    Blog.find({ categoria : regex }, { })
    .then( (data) => {
        res.send(data);
        res.end();
    })
    .catch( (erro) => {
        res.send(erro);
        res.end();
    });  

});


module.exports = router;