 import express from 'express'
 const router = express.Router()
 import Productos from'../modelos/productos'

 //const bodyParser = require('body-parser');
 //router.use(bodyParser.urlencoded({  extended: true  }));
 router.use(express.json())

 let prod = new Productos([]);

 router.get('/', async (_req,res) => {
    res.status(200).json(prod.getProducts())
 })
 
 router.get('/:id',async (req,res) => {
   res.status(200).json(prod.findOneProduct(req.params.id))
 })
 
 router.post('/', async (req,res) => {
 // console.log("Productos.ts L18",req.body);
   prod.addProduct(req.body)
   res.sendStatus(201)
 })
 
 router.patch('/:id',async (req,res) => {
   res.status(202).json(prod.updateProduct(req.body,req.params.id))
 })
 
 router.delete('/:id',async (req,res) => {
   res.status(200).json(prod.delProduct(req.params.id))
 })
 
 module.exports = router
 export{prod} 