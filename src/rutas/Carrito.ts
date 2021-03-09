import express from 'express'
import carrito from '../modelos/carrito';
const router = express.Router()
 
router.use(express.json())
 
 //import Carrito from'../modelos/carrito'
 import {prod as prodBD } from './Productos'
 let as:any
 let prod = new carrito(as);
 
 router.get('/', async (_req,res) => {
   res.status(200).json(prod.getProducts())
 })
 
 router.get('/:id',async (req,res) => {
   res.status(200).json(prod.findOneProduct(req.params.id))
 })
 
 router.post('/', async (req,res) => {
   prod.addProduct(req.body)
   res.sendStatus(201)
 })
 
 router.delete('/:id',async (req,res) => {
   res.status(200).json(prod.delProduct(req.params.id))
 })
 
 module.exports = router
