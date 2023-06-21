import React from 'react'
import styles from './webinar.module.css'
import { Link } from 'react-router-dom'

const Webinar4 = () => {
  return (
    <div>
      <form>

      <div className={styles.etapa}>4/6</div>
      
      <div>
        <h1>¡Concretemos una reunión!</h1>
        <p>Es hora de personalizar tu campaña</p>
      </div>

      <div>
        <h2>3 Beneficios que recibirán si asisten</h2>
        <input type='text' placeholder='1.' className={styles.input3}></input>
        <input type='text' placeholder='2.' className={styles.input3}></input>
        <input type='text' placeholder='3.' className={styles.input3}></input>
      </div>
      
      <Link to='/webinar/5'>
        <button className={styles.botonSiguiente}>Siguiente</button> 
      </Link>
      </form>


    </div>
  )
}

export default Webinar4