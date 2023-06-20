import React from 'react'
import styles from './webinar.modules.css'
import { Link } from 'react-router-dom'


const Webinar = () => {
  return (
    <div>
  <div className={styles.etapa}>1/6</div>
      
      <div>
        <h1>¡Invitemos a un webinar!</h1>
        <p>Es hora de personalizar tu campaña</p>
      </div>

      <div>
        <h2>¿De qué se hablará?</h2>
        <input type='text' placeholder='¿De qué rubro, tema, etc.?' className={styles.input2}></input>
      </div>
      
      <Link to='/webinar/2'>
        <button className={styles.botonSiguiente}>Siguiente</button>
      </Link>

    </div>
  )
}

export default Webinar