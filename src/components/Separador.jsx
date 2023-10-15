import PropTypes from 'prop-types';
import React from "react";
import './Separador.css';


function Separador({texto}){

        return(
            <div className="contenedor">
                <header className="header_style">
                    <p className="p">{texto}</p>
                </header>

            </div>
        );
}

Separador.defaultProps = {
    texto: 'Pokemaniacos'
}
Separador.propTypes={
    texto:PropTypes.string
}

export default Separador;


