import React from 'react'
import styles from './webinar.modules.css'
import { Link } from 'react-router-dom'

const Webinar5 = () => {
  return (
    <div>
      <div className={styles.etapa}>5/6</div>
      
      <div>
        <h1>¡Concretemos una reunión!</h1>
        <p>Es hora de personalizar tu campaña</p>
      </div>

      <div>
        <h2>¿Cuál es el propósito del evento?</h2>
        <input type='text' placeholder='¿Qué necesidad satisface o qué problema soluciona?' className={styles.input2}></input>
      </div>
      
      <Link to='/webinar/6'>
        <button className={styles.botonSiguiente}>Siguiente</button>
      </Link>


    </div>
  )
}

export default Webinar5