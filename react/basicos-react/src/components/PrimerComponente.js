import React, {Component} from 'react';
import Header from "./Header";

class PrimerComponente extends Component{
        render() {
            return(
                <React.Fragment>
                    <Header/>
                    <p>Hola Munndo desde mi primer componente </p>;
                </React.Fragment>
            );
        }
}

export default PrimerComponente;