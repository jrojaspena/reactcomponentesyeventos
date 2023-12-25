import { useState } from "react";
import PropTypes from "prop-types";

const Formulario = ({setError, setMensajeAlerta}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirma, setConfirma] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      setError(true);
      setMensajeAlerta('Debes ingresar tu nombre');
    } else if (contraseña === '' || confirma === '') {
      setError(true);
      setMensajeAlerta('La contraseña es requerida.');
    } else if (contraseña !== confirma) {
      setError(true);
      setMensajeAlerta('Las contraseñas no coinciden.');
    } else {
      setMensajeAlerta('¡Tu registro fue exitoso!');
      setError(false);
      setName('');
      setEmail('');
      setContraseña('');
      setConfirma('');
    }
  }

  return (
    <div className="container">
      <p>O usa tu email para registrarte</p>
      <form onSubmit={handleSubmit}>
        <div className="w-100">
          <label className="form-label">Nombre</label>
          <input 
          className="form-control" 
          type="text" 
          value={name} 
          onChange={e=> setName(e.target.value)}/>
        </div>

        <div className="w-100">
          <label className="form-label">Email</label>
          <input 
          className="form-control" 
          type="email" 
          value={email} 
          onChange={e=> setEmail(e.target.value)}/>
        </div>

        <div className="w-100">
          <label className="form-label">Contraseña</label>
          <input 
          className="form-control" 
          type="password" 
          value={contraseña} 
          onChange={e=> setContraseña(e.target.value)}/>
        </div>

        <div className="w-100">
          <label className="form-label">Confirma tu contraseña</label>
          <input 
          className="form-control" 
          type="password" 
          value={confirma} 
          onChange={e=> setConfirma(e.target.value)}/>
        </div>  

        <button className="btn btn-primary mt-4 w-100">Registrase</button>

      </form>
    </div>
  )
}

Formulario.propTypes = {
  setError: PropTypes.func.isRequired,
  setMensajeAlerta: PropTypes.func.isRequired
}

export default Formulario