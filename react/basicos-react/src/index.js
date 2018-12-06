import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import PrimerComponente from "./components/PrimerComponente";

const imagen = React.createElement(
    'div',
    {id: 'id-23'},
    React.createElement(
        'p',
        {className: 'parrafo'},
        'hola'
    )
);

ReactDOM.render(<PrimerComponente />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Notse this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
