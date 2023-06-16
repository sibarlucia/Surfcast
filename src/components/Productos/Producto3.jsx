import React, {useState} from 'react'
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import Styles from '/src/styles/stylesglobales.css' 
import Producto4 from './Producto4';


const Producto3 = () => {

  const {step} = useParams()

  return (
    <div className='forms'>

      <div>

      <form>
        <div className='etapa'>3/5</div>
        <h1>¡Promocionemos tu producto o servicio!</h1>
        <h2>Es hora de personalizar tu campaña</h2>

        <p>Precio</p>
        <input type='text' placeholder='Escribe aquí'></input>

        <p>¿Dónde lo puedo conseguir?</p>
        <p>Pega el link aquí</p>
        <input type='text' placeholder='https:/workspace.com/webinar/'></input>
        
        <Link to='/producto/4'>
            <button className='botonSiguiente'>Siguiente</button>
          </Link>
        

      </form>
      </div>

    </div>
  )
}

export default Producto3