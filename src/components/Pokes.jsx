import PropTypes from 'prop-types';
import React from "react";
import './Pokes.component.css';

const handleClick =()=>{
  alert('wooo wooo wobbuffet pokemon!');
};

class Pokes extends React.Component{
  
    render(){
        const {LDinos} = this.props;
        return(
            <div>
              <p className="Pokes_h1">{this.props.texto}</p>
            {LDinos.map((elemento) => (
              <div key={elemento.id}>
                {elemento.nombre}
              </div>
            ))}
            <button className="poke_button" onClick={handleClick}>Picale</button>
          </div>
        );
    };
}

Pokes.defaultProps = {
  texto:"TSSSSSSS."
}

Pokes.propTypes={
  texto:PropTypes.string
}

export default Pokes;
