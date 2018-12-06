import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {

        const empleado = {
            nombre: 'javier misat',
            profesion: 'Developer',
            sueldo: 60000
        };

        return (
            //React sin JSX
            /**
             * Hay dos opciones para crear varios elementos html
             * los elementos deben estar en un elemento padre, si no tambien
             * se puede usar reactfragment
             *
            <React.Fragment>
                <h1>Aprendiendo REACT JS</h1>
                <p>Nombre: {empleado.nombre} </p>
                <p>Profesion: {empleado.profesion} </p>
                <p>Sueldo: {empleado.sueldo} </p>
            </React.Fragment>*/

            <div className='contenedor'>
                <h1 className='mayusculas'>Aprendiendo REACT JS</h1>
                <p>Nombre: {empleado.nombre} </p>
                <p>Profesion: {empleado.profesion} </p>
                <p>Sueldo: {empleado.sueldo} </p>
            </div>

        );
    }
}

export default App;
