interface intProd {
    id: string;
    timestammp:Date;
    nombre: string;
    descripcion: string;
    codigo: number;
    foto: string;
    precio: number;
    stock: number;
 }  
 const prodModel = require ('../../data/productosMMDB');
 
  class Productos {
 
      constructor(public productos:intProd[]){
         prodModel.find({},{_id:0, id:1, timestammp:1, nombre:1, descripcion:1, codigo:1, foto:1, precio:1, stock:1})
         .then((rows:any) => {
            //   console.log("productos.ts L19",rows,rows.length);
            if (rows.length) this.productos = rows})   
         .catch((err:any) => console.log(err))///VER INTERFACE
      }

      public prodBD(){
         return this.productos
      }

      
      addProduct(prod: intProd) {
         const {nombre, descripcion, codigo, foto, precio, stock} = prod
         const id: string = (this.productos.length + 1 ).toString();
         const timestammp: Date = new Date();
         //console.log("productos.ts L29",timestammp);
         const producto = {
           id,
           timestammp,
           nombre,
           descripcion,
           codigo,
           foto,
           precio,
           stock,
         }
         this.productos.push(producto)
               //////////Pers.Mongo////////////////////////
               const  prodSaved = new prodModel(producto)
               console.log("productos.ts Linea 42",producto );
               prodSaved.save()
                     .then(() => {
                        console.log('product inserted!') 
                        })
                     .catch((err:any) => console.log(err))///VER INTERFACE
               /////////////////////////////////
      }
 
      getProducts(nom:String ,preL:String,preH:String) {
         console.log(nom, preL ,preH);
               //////////Pers.Mongo////////////////////////
              // const  prodGet = new prodModel()
              // prodGet.createIndex( { nombre: "text"} )
               prodModel.find( {nombre: { $regex: nom }, } )  //// Regex
                                                                  //db.coll.find({name: /^Max/})   // regex: starts by letter "M"
                                                                  //db.coll.find({name: /^Max$/i}) // regex case insensitive
               .then( (sel:any) => {console.log(sel)})
               .catch( (err:any) => console.log(err))
               ///VER INTERFACE
         /////////////////////////////////         
         
         
     let productoVista:any[] = this.productos///VER INTERFACE
         if(!this.productos.length) productoVista = [{error : "no hay productos cargados"}]
          return productoVista; 
         // console.log("productos.ts L59",productoVista);
         
      }
 
      findOneProduct(id: string){
         let producto:any = this.productos.find((prod:any) => prod.id == id);///VER INTERFACE
         if (!producto) producto = {error : 'producto no encontrado'}
         return producto
      }
 
       updateProduct(prod: any, idn: string){
         const {timestammp, nombre, descripcion, codigo, foto, precio, stock} = prod
          const id = idn
          const productoAct = {
            id,
            timestammp,
            nombre,
            descripcion,
            codigo,
            foto,
            precio,
            stock,
          }
          let producto:any = this.productos.find((prod:any) => prod.id == id);///VER INTERFACE
          if (!producto) producto = {error : 'producto no encontrado'}
             else  {this.productos.splice(this.productos.indexOf(producto), 1,productoAct)
                      producto = productoAct
                            //////////Pers.Mongo////////////////////////
                           prodModel.where({ id: id }).updateOne(productoAct)
                                 .then(() => {console.log('product modified!') })
                                 .catch((err:any) => console.log(err))///VER INTERFACE
                           /////////////////////////////////



                  }
          return producto
     }
 
       delProduct(id: string){
       let producto:any = this.productos.find((prod) => prod.id == id);///VER INTERFACE///VER INTERFACE
       if (!producto) producto = {error : 'producto no encontrado'}
          else  {this.productos.splice(this.productos.indexOf(producto), 1)
                           //////////Pers.Mongo////////////////////////
                           prodModel.deleteOne({id:id})
                                 .then(() => {console.log('product deleted!') })
                                 .catch((err:any) => console.log(err))///VER INTERFACE
                           /////////////////////////////////

         }
             
       return producto
     }
  }
  export default Productos
  export {intProd}
 
 