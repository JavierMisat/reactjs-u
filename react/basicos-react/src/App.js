import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return (
            //React sin JSX
            React.createElement(
                'h1',
                {id: 'titulo', className: 'encabezado'},
                'Hola Mundo'
            )

        );
    }
}

export default App;
