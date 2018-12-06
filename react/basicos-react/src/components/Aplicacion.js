import React, {Component} from 'react';
import Header from "./Header";
import Productos from "./Productos";
import Footer from "../Footer";

class Aplicacion extends Component {
    render() {
        const productos = [
            {nombre: 'Libro', precio: 3000},
            {nombre: 'Maleta', precio: 2000},
            {nombre: 'Disco', precio: 800},
            {nombre: 'WalkMan', precio: 5000},
        ];

        return (
            <React.Fragment>
                <Header
                    titulo='Nuestra Tienda Virtual'/>
                <Productos
                    productos={productos}
                />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Aplicacion;