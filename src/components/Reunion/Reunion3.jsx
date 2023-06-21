import React from 'react'
import styles from './reunion.module.css'
import { Link } from 'react-router-dom'

const Reunion3 = () => {
  return (
    <div>
      <form>
      <div className={styles.etapa}>3/6</div>
      
      <div>
        <h1>¡Concretemos una reunión!</h1>
        <p>Es hora de personalizar tu campaña</p>
      </div>

      <div>
        <h2>Deja el link de tu agenda para que conozcan tu disponibilidad</h2>
        <input type='text' placeholder='¿Qué necesidad satisface o qué problema soluciona?' className={styles.input2}></input>
      </div>
      
      <Link to='/reunion/4'>
        <button className={styles.botonSiguiente}>Siguiente</button>
      </Link>

      </form>


    </div>
  )
}

export default Reunion3