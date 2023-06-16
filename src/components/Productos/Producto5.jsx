import React, {useState} from 'react'
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import Styles from '/src/styles/stylesglobales.css' 
// import Producto5 from './Producto5';


const Producto5 = () => {

  const {step} = useParams()

  return (
    <div className='forms'>
      <div>
        <form>
          <div className='etapa'>5/5</div>
          <h1>¡Promocionemos tu producto o servicio!</h1>
        <h2>Es hora de personalizar tu campaña</h2>

        <p>Adjunta algún documento que desees compartir</p>

        <Link to='/producto/5'>
          <button className='botonSiguiente'>Finalizar</button>
        </Link>
        </form>
      </div>

    </div>
  )
}

export default Producto5