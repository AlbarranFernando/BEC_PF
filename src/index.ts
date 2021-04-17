import express from 'express'
const app = express()

//////////////////////Conexion Mongo///////////////////////////
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/ecommerce',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log('Se conecto a mongodb'))
.catch( (err) => console.log(err));

//const prodModel = require ('../models//productos');
//////////////////////Conexion Mongo FIN//////////////////////////


app.use('/productos',require('./rutas/RProductos'))
app.use('/carrito',require('./rutas/RCarrito'))

app.use(function(req, res) {
  res.status(404).send(`error : -2, descripcion: ruta '${req.url}' metodo '${req.method}' no implementada`);
  });


app.listen(8080,() => {
    console.log("Running on port 8080");
  }).on('error', (e) => {
    console.log('Error: ', e.message)
  });