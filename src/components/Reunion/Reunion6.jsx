import React from 'react'
import styles from './reunion.module.css'
import { Link } from 'react-router-dom'

const Reunion6 = () => {
  return (
    <div>
      <form>

      <div className={styles.etapa}>6/6</div>
      
      <div>
        <h1>¡Concretemos una reunión!</h1>
        <p>Es hora de personalizar tu campaña</p>
      </div>

      <div>
        <h2>Adjunta algún documento que desees compartir</h2>
        <input type='file' placeholder='Subir archivos' className={styles.input2}></input>
      </div>
      
      <Link to='/reunion/6'>
        <button className={styles.botonSiguiente}>Finalizar</button>
      </Link>
      </form>
    </div>
  )
}

export default Reunion6
