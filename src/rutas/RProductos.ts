 import express from 'express'
 const router = express.Router()
 import Productos from'../modelos/Mproductos'
 router.use(express.json())
 const prodModel = require ('../../data/productosMMDB');

 let admin:boolean = true;

 let prod = new Productos([]);

 router.get('/', async (req,res) => {

   prodModel.find( { nombre: {$regex: req.query.nom ,$options:'i'},precio:{$lte:req.query.preh, $gte:req.query.prel }} ) 
   .then( (sel:any) => {res.status(200).json(sel)})
   .catch( (err:any) => console.log(err))
  //  res.status(200).json(prod.getProducts(nom,preL,preH))
    
 })
 
 router.get('/:id',async (req,res) => {
   res.status(200).json(prod.findOneProduct(req.params.id))
 })
 
 router.post('/', async (req,res) => {
  if (admin) {
        try {
          prod.addProduct(req.body)
          res.sendStatus(201)
        } catch (err) {
          res.send(err)
        }
  }
  else res.status(401).send(`error : -1, descripcion: ruta '${req.url}' metodo '${req.method}' no autorizada`);

 })
 
 router.patch('/:id',async (req,res) => {
   if (admin) {res.status(202).json(prod.updateProduct(req.body,req.params.id))}
   else res.status(401).send(`error : -1, descripcion: ruta '${req.url}' metodo '${req.method}' no autorizada`);
 })
 
 router.delete('/:id',async (req,res) => {
  if (admin) {res.status(200).json(prod.delProduct(req.params.id))}
   else res.status(401).send(`error : -1, descripcion: ruta '${req.url}' metodo '${req.method}' no autorizada`);
 })
 
 module.exports = router
