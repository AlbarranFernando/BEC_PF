"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carrito_1 = __importDefault(require("../modelos/carrito"));
const router = express_1.default.Router();
let as;
let prod = new carrito_1.default(as);
router.get('/carrito', async (_req, res) => {
    res.status(200).json(prod.getProducts());
});
router.get('/carrito/:id', async (req, res) => {
    res.status(200).json(prod.findOneProduct(req.params.id));
});
router.post('/carrito', async (req, res) => {
    prod.addProduct(req.body);
    res.sendStatus(201);
});
router.delete('/carrito/borrar/:id', async (req, res) => {
    res.status(200).json(prod.delProduct(req.params.id));
});
