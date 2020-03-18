const express = require('express');
const Blog = require('../modelo/blogModule');
const conexion = require('../modelo/database');
const app = express();


// GUARDAR BLOG

app.post('/blog/agregar', function(req, res) {

  let body = req.body;

  let blog = new Blog({
      nombre: body.nombre,
      url: body.url,
      descripcion: body.descripcion,
      urlImage: body.urlImage,
      comentarios: body.comentarios,
  });

  blog.save((error, blog) => {
      
      if (error){
          return res.status(400).json({ Ok : false });
      }

      res.json( { Ok : true, id : blog._id  });
  }); 

});

app.get('/blogs', function(req ,res){


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

app.get('/Blog/obtener/:id', function(req ,res){

    id = req.params.id;
    console.log(id);

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

app.get('/blog/eliminar/:id', function(req ,res){

    id = req.params.id;
    console.log(id);

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



module.exports = app;