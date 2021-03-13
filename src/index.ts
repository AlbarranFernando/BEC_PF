import express from 'express'
const app = express()



app.use('/productos',require('./rutas/Productos'))
app.use('/carrito',require('./rutas/Carrito'))

app.use(function(req, res) {
  res.status(404).send(`error : -2, descripcion: ruta '${req.url}' metodo '${req.method}' no implementada`);
  });


app.listen(8080,() => {
    console.log("Running on port 8080");
  }).on('error', (e) => {
    console.log('Error: ', e.message)
  });