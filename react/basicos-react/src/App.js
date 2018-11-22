import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    render() {
        return (
            //React sin JSX
            React.createElement(
                'div',
                null,
                React.createElement(
                    'input',
                    {type: 'text', id: 'name', value: 'Value para hijo'},
                )
            )
        );
    }
}

export default App;
