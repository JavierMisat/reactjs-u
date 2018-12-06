import React, {Component} from 'react';

class PrimerComponente extends Component{
        render() {
            return(
                <React.Fragment>
                    <h1 className='mayusculas'>Hola mundo</h1>
                    <p>Hola Munndo desde mi primer componente </p>;
                </React.Fragment>
            );
        }
}

export default PrimerComponente;