import { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import './Registro.css';

import PropTypes from "prop-types";

const mostrarAlerta = (error, texto) => {
  return (
    <div className="mt-4">
      <Alert 
        color={error ? 'danger' : 'success'} 
        texto={texto}
      />
    </div>
 )
};

const Registro = ({mensajeAlerta, setMensajeAlerta}) => {

  const [error, setError] = useState(false);

  return (
    <div className="container">
      <div>
        <h1>Crea una cuenta</h1>
      </div>
      <div className="socialButton">
        <SocialButton icono="fa-brands fa-facebook"/>
        <SocialButton icono="fa-brands fa-github"/>
        <SocialButton icono="fa-brands fa-linkedin"/>
      </div>
      <div>
        <Formulario
          setError={setError} 
          setMensajeAlerta={setMensajeAlerta}
        />
      </div >
      <div className="col-10 text-center">
      {mensajeAlerta && mostrarAlerta(error, mensajeAlerta)}
      </div>
      
    </div>
  )
}

Registro.propTypes = {
  mensajeAlerta: PropTypes.string.isRequired,
  setMensajeAlerta: PropTypes.func.isRequired
}

export default Registro