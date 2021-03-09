"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prod = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productos_1 = __importDefault(require("../modelos/productos"));
let prod = new productos_1.default([]);
exports.prod = prod;
router.get('/productos', async (_req, res) => {
    res.status(200).json(prod.getProducts());
});
router.get('/productos/:id', async (req, res) => {
    res.status(200).json(prod.findOneProduct(req.params.id));
});
router.post('/productos', async (req, res) => {
    prod.addProduct(req.body);
    res.sendStatus(201);
});
router.patch('/productos/actualizar/:id', async (req, res) => {
    res.status(202).json(prod.updateProduct(req.body, req.params.id));
});
router.delete('/productos/borrar/:id', async (req, res) => {
    res.status(200).json(prod.delProduct(req.params.id));
});
module.exports = router;
