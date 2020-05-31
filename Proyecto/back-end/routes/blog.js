const express = require('express');
const Blog = require('../modelo/blogModule');
const conexion = require('../modelo/database');
const router = express.Router();


// GUARDAR BLOG

router.post('/', function(req, res) {

  let body = req.body;

  let blog = new Blog({
      nombre: body.nombre,
      categoria: body.categorias,
      urlImagen: body.urlImagen,
      comentarios: body.comentario,
      usuario: body.usuario
  });

  blog.save((error, blog) => {
      
      if (error){
          return res.status(400).json({ Ok : false });
      }

      res.json( { Ok : true, id : blog._id  });
  }); 

});

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



module.exports = router;