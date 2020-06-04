//importamos las dependencias
const express = require ('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

//creamos constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear nuestras rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y hbs
const app = express();
app.set('view engine','hbs')
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/public'));

//Vamos a decirle a express la ruta a emplear
app.use(fn= '/', pintoresRouter);

/*la conexion con mongo db */
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://doriloco69:sople1324@portilloosmar-ce0ts.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
       console.log('Conexion establecida :)')
   })
   .catch(err => console.log(err));

   //configurar rutas
app.get('/', (req,res)=>{
    res.render('index',{
        autor : 'Osmar Portillo',
        year : new Date().getFullYear(),
        titulo : "Inicio"
    });
  });
  app.get('/vincent', (req, res)=>{
    res.render('vancogh', {
        autor : 'Osmar Portillo',
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh'
    });
  });
  app.get('/salvador', (req, res)=>{
    res.render('dali', {
        autor : 'Osmar Portillo',
        year : new Date().getFullYear(),
        title : 'Salvador dali'
    });
  });
  app.get('/pablo', (req, res)=>{
    res.render('picasso', {
        autor : 'Osmar Portillo',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso'
    });
  });
  app.get('/warjol', (req, res)=>{
    res.render('andi', {
        autor : 'Osmar Portillo',
        year : new Date().getFullYear(),
        title : 'Andi Warhol'
    });
  });
   
   
   /*Arrancar el servidor web */
   app.listen(PUERTO, ()=>{
       console.log("escuchando el puerto...");
   });