import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import styles from './perfilamiento.module.css'


const perfilamiento5 = () => {
  
  const {step} = useParams()
  const [opcion, setOpcion] = useState('')



  const handleCambioOpcion = (event) => {
    setOpcion(event.target.value)
  }
  console.log(opcion);

  const nombre = localStorage.nombre

  return (
    <div className={styles.perfilamiento}>

<form>
  
  <p>¡{nombre}, cuéntanos un poco sobre tí!</p>
  <h2>¿Haz usado la automatización de Linkedin antes?</h2>

  <select value={opcion} onChange={handleCambioOpcion}>
    <option value="">Elige una opción</option>
    <option value="opcion1">Opción 1</option>
    <option value="opcion2">Opción 2</option>
    <option value="opcion3">Opción 3</option>
    <option value="opcion4">Opción 4</option>

  </select>

    <Link to='/perfilamiento/5'>
        <button className='botonContinuar'>Continuar</button>
    </Link>

    <Link className={styles.volver} to='/perfilamiento/3'>
        <img src='/src/assets/volverblanco.png'/>
        </Link>
  </form>

    </div>
  )
}

export default perfilamiento5