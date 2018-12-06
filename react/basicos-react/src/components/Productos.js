import React, {Component} from "react";

class Productos extends Component{
    render() {
        return(
           <div>
               <h2>Listado de productos</h2>
               {this.props.productos.forEach(producto =>{
                 return `<p>Nombre: ${producto.nombre}</p>`
               })}
           </div>
        );
    }
}
export default Productos;