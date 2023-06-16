import React, {useState} from 'react'
import { Link, BrowserRouter, Route, useParams } from "react-router-dom";
import Styles from '/src/styles/stylesglobales.css' 
import Producto5 from './Producto5';

const Producto4 = () => {

  const {step} = useParams()


  const [opcion, setOpcion] = useState('')

  const handleCambioOpcion = (event) => {
    setOpcion(event.target.value)
  }
  console.log(opcion);
  
  return (
    <div className='forms'>

      <div>
        <form>
          <div className='etapa'>4/5</div>
          <h1>¡Promocionemos tu producto o servicio!</h1>
        <h2>Es hora de personalizar tu campaña</h2>

        <p>¿Qué incentivo te gustaría usar para que compren tu producto o servicio?</p>
        
        <select value={opcion} onChange={handleCambioOpcion}>
          <option value="">Elige una opción</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
          <option value="opcion4">Opción 4</option>

        </select>

        <button>Agregar otro incentivo*</button>

        <Link to='/producto/5'>
          <button className='botonSiguiente'>Siguiente</button>
        </Link>
        </form>
      </div>

    </div>
  )
}

export default Producto4