 import express from 'express'
 const router = express.Router()
 import Productos from'../modelos/productos'
 import fs from'fs';
 router.use(express.json())

 let admin:boolean = false;

 ////////////GrabArch/////////////////////
 var pers = async (asd:any) => {
    try {let itProd = JSON.stringify(asd)
    await fs.promises.writeFile('Productos.txt',`${itProd}`)
  }
  catch (err) {console.log(err)
  }}
////////////////////////////////////////
 let prod = new Productos([]);

 //////////Lee persistencia///////////////
 try {
  let prodi = fs.readFileSync('Productos.txt', 'utf8')
  prod.productos =  JSON.parse(prodi)

} catch (err) {
  console.error(err)
}
/////////////////////////////////////////
 router.get('/', async (_req,res) => {
    res.status(200).json(prod.getProducts())
    
 })
 
 router.get('/:id',async (req,res) => {
   res.status(200).json(prod.findOneProduct(req.params.id))
 })
 
 router.post('/', async (req,res) => {
  if (admin) {prod.addProduct(req.body)
   pers(prod.productos)
   res.sendStatus(201)}
   else res.status(401).send(`error : -1, descripcion: ruta '${req.url}' metodo '${req.method}' no autorizada`);
 })
 
 router.patch('/:id',async (req,res) => {
   if (admin) {res.status(202).json(prod.updateProduct(req.body,req.params.id))
    pers(prod.productos)}
   else res.status(401).send(`error : -1, descripcion: ruta '${req.url}' metodo '${req.method}' no autorizada`);
 })
 
 router.delete('/:id',async (req,res) => {
  if (admin) {res.status(200).json(prod.delProduct(req.params.id))
    pers(prod.productos)}
   else res.status(401).send(`error : -1, descripcion: ruta '${req.url}' metodo '${req.method}' no autorizada`);
 })
 
 module.exports = router
