import React, {useState} from 'react'
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import Styles from '/src/styles/stylesglobales.css' 
import Producto3 from './Producto3';


const Producto2 = () => {

  const {step} = useParams()

  return (
    <div className='forms'>

      <div>
        <form>
          <div className='etapa'>2/5</div>
          <h1>¡Promocionemos tu producto o servicio!</h1>
          <h2>Es hora de personalizar tu campaña</h2>

          <p>
            3 beneficios clave que brindarás
          </p>
          <input type='text' placeholder='1.'></input>
          <input type='text' placeholder='2.'></input>
          <input type='text' placeholder='3.'></input>

          <Link to='/producto/3'>
            <button className='botonSiguiente'>Siguiente</button>
          </Link>
        </form>
      </div>



    </div>
  )
}

export default Producto2