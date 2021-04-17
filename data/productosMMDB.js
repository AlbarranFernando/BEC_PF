const mongoose = require('mongoose')

const prodCollection = 'productos'
const ProductSchema = new mongoose.Schema({
    id:{ type: Number, required: true },
    timestammp: { type: Date, required: true },
    nombre: { type: String, required: true, max: 50 },
    descripcion: { type: String, required: true, max: 200 },
    codigo: { type: Number, required: true },
    foto: { type: String, required: true, max: 200 },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true }
})

module.exports = mongoose.model(prodCollection, ProductSchema)
