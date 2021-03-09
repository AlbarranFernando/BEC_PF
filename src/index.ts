import express from 'express'
const app = express()
const router = express.Router()

app.use('/productos',require('./rutas/Productos'))
app.use('/carrito',require('./rutas/Carrito'))

//express.urlencoded({extended:true})
//app.use(express.json())


app.listen(8080,() => {
    console.log("Running on port 8080");
  }).on('error', (e) => {
    console.log('Error happened: ', e.message)
  });