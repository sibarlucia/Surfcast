import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

const perfilamiento2 = () => {

  const {step} = useParams()

  const [opcion, setOpcion] = useState('')

  const handleCambioOpcion = (event) => {
    setOpcion(event.target.value)
  }
  console.log(opcion);

  const nombre = localStorage.nombre
  // console.log(nombre);
  return (
    <div className='perfilamiento'>

      <form>
  
      <p>¡{nombre}, cuéntanos un poco sobre tí!</p>
      <h2>¿En qué tipo de empresa trabajas?</h2>

      <select value={opcion} onChange={handleCambioOpcion}>
        <option value="">Elige una opción</option>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
        <option value="opcion4">Opción 4</option>

      </select>

        <Link to='/perfilamiento/3'>
            <button className='botonContinuar'>Continuar</button>
        </Link>
      </form>


    </div>
  ) 
}

export default perfilamiento2