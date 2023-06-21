import React from 'react'
import styles from './newsletter.module.css'
import { Link } from 'react-router-dom'

const Newsletter3 = () => {
  return (
    <div>
      <form>
      <div className={styles.etapa}>3/5</div>

    <div>
      <h1>¡Aumentemos tus suscripciones</h1>
      <p>Es hora de personalizar tu campaña</p>
    </div>

    <div>
      <h2>¿Qué beneficio se ofrecerá para los suscriptores?</h2>
      <div className={styles.botonera}>
        <button type='button'>Información exclusiva</button>
        <button type='button'>Consejos</button>
        <button type='button'>Trucos y tips</button>
        <button type='button'>Promociones exclusivas</button>
      </div>

      <div className={styles.botonera}>
        <button type='button'>Otro</button>
        <input type='text' placeholder='Escribe aquí' className={styles.input2}></input>
      </div>
    </div>

    <Link to='/newsletter/4'>
        <button className={styles.botonSiguiente}>Siguiente</button>
      </Link>
      </form>
    </div>
  )
}

export default Newsletter3