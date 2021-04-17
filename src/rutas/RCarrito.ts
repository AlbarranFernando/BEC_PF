import express from 'express'
import carrito,{intCarr} from '../modelos/Mcarrito';
import {intProd} from '../modelos/Mproductos';
const router = express.Router()
 
router.use(express.json())

let timestamp: Date = new Date();
let id: string = timestamp.getTime().toString();
let producto: intProd[]=[];
let prica:intCarr = {id,timestamp, producto};
 let prod = new carrito(prica);
 
 router.get('/', async (_req,res) => {
   res.status(200).json(prod.getProducts())
 })
 
 router.get('/:id',async (req,res) => {
   res.status(200).json(prod.findOneProduct(req.params.id))
 })
 
 router.post('/:id', async (req,res) => {
   prod.addProduct(req.params.id)
   res.sendStatus(201)
 })
 
 router.delete('/:id',async (req,res) => {
   res.status(200).json(prod.delProduct(req.params.id))
 })
 
 
 module.exports = router
