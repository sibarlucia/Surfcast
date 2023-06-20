import React from 'react'
import styles from './webinar.modules.css'
import { Link } from 'react-router-dom'

const Webinar3 = () => {
  return (
    <div>

      <div className={styles.etapa}>3/6</div>

      <div>
        <h1>¡Invitemos a un webinar!</h1>
        <p>Es hora de personalizar tu campaña</p>
      </div>

    <div>
      <h2>¿Con qué tipo de cliente deseas reunirte?</h2>
        <select>
          <option>Elige el método</option>
          <option>Opción 1</option>
          <option>Opción 2</option>
          <option>Opción 3</option>
        </select>

    </div>

      <div>
        <h2>Pega el link aquí:</h2>
        <input type='text' placeholder='https://workspace.com/webinar/' className={styles.input}></input>
      </div>

      <Link to='/webinar/4'>
        <button className={styles.botonSiguiente}>Siguiente</button>
      </Link>
    </div>
  )
}

export default Webinar3