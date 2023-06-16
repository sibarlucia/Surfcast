import React, {useState} from 'react'
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import Styles from '/src/styles/stylesglobales.css' 
import Producto2 from './Producto2';

const Producto = () => {

  const {step} = useParams()

  return (
    
    <div className='forms'>

        <div >
        <form>
            <div className="etapa">1/5</div>
            <h1>¡Promocionemos tu producto o servicio!</h1>
            <h2>Es hora de personalizar tu campaña</h2>

           
                <p>¿Qué producto o servicio es?</p>
                <input type='text' placeholder='¿Qué necesidad satisface o qué problema soluciona?'/>
            
            <Link to='/producto/2'>
              <button className='botonSiguiente'>Siguiente</button>  
            </Link>
        </form>

        </div>
    </div>
  )
}

export default Producto