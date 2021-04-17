import {intProd} from "./Mproductos"
import fs from'fs';
import { timeStamp } from "node:console";
export interface intCarr {
    id: string;
    timestamp:Date;
    producto:intProd[];
 }  
  
  class carrito {
      
 
      constructor(public carrito:intCarr,){      }

      getProducts() {
        let productoVista:any[] = []                 
        if(this.carrito) {productoVista = this.carrito.producto}///VER INTERFACE}
        if(!this.carrito || !this.carrito.producto.length) productoVista = [{error : "no hay productos cargados"}]
        console.log("carrito.ts L18",this.carrito.timestamp,"id carrito ", this.carrito.id);
        
         return productoVista;
     }

     findOneProduct(id: string){
        let producto:any = this.carrito.producto.find((prod:any) => prod.id === id);///VER INTERFACE
        if (!producto) producto = {error : 'producto no encontrado'}
        return producto
     }

     addProduct(id: string) {
      ////////////////Archivo////////////
      let prodi:any
      try {
         prodi = JSON.parse(fs.readFileSync('Productos.txt', 'utf8'))
         } catch (err) {console.error(err) }
        //////////////////////////////

      let selProd = prodi.find((prod:any) => prod.id === id)
     
      //console.log("carrito.ts L37",id ,"filter", selProd)
     
      
     //   const producto:any = productos.findOneProduct(id)
        this.carrito.producto.push(selProd)
     }

     delProduct(id: string){
        let producto:any = this.carrito.producto.find((prod) => prod.id === id);///VER INTERFACE///VER INTERFACE
        if (!producto) producto = {error : 'producto no encontrado'}
           else  this.carrito.producto.splice(this.carrito.producto.indexOf(producto), 1)
              
        return producto
      }
      
  }


   export default carrito;
   