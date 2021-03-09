import {prod as prodBD } from '../rutas/Productos'
import {intProd} from "./productos"
interface intCarr {
    id: string;
    timestammp:Date;
    producto:intProd[];
 }  
  class carrito {
      
 
      constructor(public  carrito:intCarr,){
         
      }

      getProducts() {
                  console.log("carrito.ts L16",carrito)
        let productoVista:any[] = []                 
        if(this.carrito) {productoVista = this.carrito.producto}///VER INTERFACE}
        if(this.carrito && !this.carrito.producto.length) productoVista = [{error : "no hay productos cargados"}]
         return productoVista;
     }

     findOneProduct(id: string){
        let producto:any = this.carrito.producto.find((prod:any) => prod.id === id);///VER INTERFACE
        if (!producto) producto = {error : 'producto no encontrado'}
        return producto
     }

     addProduct(id: string) {
     //   const producto:any = productos.findOneProduct(id)
      //  this.carrito.producto.push(producto)
     }

     delProduct(id: string){
        let producto:any = this.carrito.producto.find((prod) => prod.id === id);///VER INTERFACE///VER INTERFACE
        if (!producto) producto = {error : 'producto no encontrado'}
           else  this.carrito.producto.splice(this.carrito.producto.indexOf(producto), 1)
              
        return producto
      }
      
  }


   export default carrito;