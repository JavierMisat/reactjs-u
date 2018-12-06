import React, {Component} from 'react';

class Producto extends Component {
    render() {
        let {nombre, precio} = this.props.producto;
        return (
            <div>
                <ul>
                    <li>Nombre: <strong>{nombre}</strong></li>
                    <li>Precio: <strong>${precio}</strong></li>
                </ul>
            </div>
        );
    }
}

export default Producto;