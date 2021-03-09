"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Productos {
    constructor(productos) {
        this.productos = productos;
    }
    addProduct(prod) {
        const { timestammp, nombre, descripcion, codigo, foto, precio, stock } = prod;
        const id = (this.productos.length + 1).toString();
        const producto = {
            id,
            timestammp,
            nombre,
            descripcion,
            codigo,
            foto,
            precio,
            stock,
        };
        this.productos.push(producto);
    }
    getProducts() {
        let productoVista = this.productos; ///VER INTERFACE
        if (!this.productos.length)
            productoVista = [{ error: "no hay productos cargados" }];
        return productoVista;
    }
    findOneProduct(id) {
        let producto = this.productos.find((prod) => prod.id === id); ///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        return producto;
    }
    updateProduct(prod, idn) {
        const { timestammp, nombre, descripcion, codigo, foto, precio, stock } = prod;
        const id = idn;
        const productoAct = {
            id,
            timestammp,
            nombre,
            descripcion,
            codigo,
            foto,
            precio,
            stock,
        };
        let producto = this.productos.find((prod) => prod.id === id); ///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        else {
            this.productos.splice(this.productos.indexOf(producto), 1, productoAct);
            producto = productoAct;
        }
        return producto;
    }
    delProduct(id) {
        let producto = this.productos.find((prod) => prod.id === id); ///VER INTERFACE///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        else
            this.productos.splice(this.productos.indexOf(producto), 1);
        return producto;
    }
}
exports.default = Productos;
