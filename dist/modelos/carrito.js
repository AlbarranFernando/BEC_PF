"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class carrito {
    constructor(carrito) {
        this.carrito = carrito;
    }
    getProducts() {
        let productoVista = this.carrito.producto; ///VER INTERFACE
        if (!this.carrito.producto.length)
            productoVista = [{ error: "no hay productos cargados" }];
        return productoVista;
    }
    findOneProduct(id) {
        let producto = this.carrito.producto.find((prod) => prod.id === id); ///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        return producto;
    }
    addProduct(id) {
        //   const producto:any = productos.findOneProduct(id)
        //  this.carrito.producto.push(producto)
    }
    delProduct(id) {
        let producto = this.carrito.producto.find((prod) => prod.id === id); ///VER INTERFACE///VER INTERFACE
        if (!producto)
            producto = { error: 'producto no encontrado' };
        else
            this.carrito.producto.splice(this.carrito.producto.indexOf(producto), 1);
        return producto;
    }
}
exports.default = carrito;
