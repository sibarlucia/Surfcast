import React from 'react'
import styles from './webinar.modules.css'
import { Link } from 'react-router-dom'

const Webinar2 = () => {
  return (
    <div>
        <div className={styles.etapa}>2/6</div>

      <div>
        <h1>¡Invitemos a un webinar!</h1>
        <p>Es hora de personalizar tu campaña</p>
      </div>

      <div>
        <h2>Define el horario en que se desarrollará</h2>
        <select className={styles.selectPaises}> 
          <option>Horario de Chile</option>
          <option>Horario de </option>
          <option>Horario de </option>
          <option>Horario de </option>


        </select>

        <div className={styles.dias}>
          <button type='button' className={styles.dia}>DOM</button>
          <button type='button' className={styles.dia}>LUN</button>
          <button type='button' className={styles.dia}>MAR</button>
          <button type='button' className={styles.dia}>MIER</button>
          <button type='button' className={styles.dia}>JUE</button>
          <button type='button' className={styles.dia}>VIER</button>
          <button type='button' className={styles.dia}>SAB</button>
        </div>

        <div className={styles.horarios}>

          <select>
            <option>Desde</option>
          </select>
            <span> - </span>
          <select>
            <option>Hasta</option>
          </select>
        </div>
      </div>

      <Link to='/webinar/3'>
        <button className={styles.botonSiguiente}>Siguiente</button>
      </Link>

    </div>
  )
}

export default Webinar2