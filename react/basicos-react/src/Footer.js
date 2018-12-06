import React from 'react';

const Footer = () => {
    /**
     * @description A los componentes mas estaticos se les conoce como
     * stateless component
     */
    return (
        <footer>
            <p>&copy; Todos los derechos reservados {new Date().getFullYear()}</p>
        </footer>
    );
};
export default Footer;