"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router = express_1.default.Router();
app.use('/productos', require('./rutas/Productos'));
app.use('/carrito', require('./rutas/Carrito'));
app.use('/', router);
app.listen(8080, () => {
    console.log("Running on port 8080");
}).on('error', (e) => {
    console.log('Error happened: ', e.message);
});
