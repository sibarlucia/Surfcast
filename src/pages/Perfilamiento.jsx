import React, { useState } from 'react'
import { Link, BrowserRouter, Route } from "react-router-dom";
import Perfilamiento2 from '../components/Perfilamientos/perfilamiento2';
import Styles from '/src/styles/stylesglobales.css'

const Perfilamiento = () => {

  const [nombre, setNombre] = useState('');

  const handleCambioNombre = (event) => {
    setNombre(event.target.value)
  }

  const handleGuardarNombre = () => {
    localStorage.setItem('nombre', nombre)
  }

  return (
    <div className='perfilamiento'>
    <form >
        <h1>¡YOU ARE IN!</h1>
        <h2>Bríndanos tu nombre para poder empezar</h2>
        <input placeholder='Nombre' id='inputInvisible' type='text' value={nombre} onChange={handleCambioNombre}></input>
        <Link to='/perfilamiento2'>
            <button className='botonContinuar' onClick={handleGuardarNombre}>Continuar</button>
        </Link>
        

        
    </form>

    </div>
    
  )
}

export default Perfilamiento