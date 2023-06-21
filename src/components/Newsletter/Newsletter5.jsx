import React from 'react'
import styles from './newsletter.module.css'
import { Link } from 'react-router-dom'

const Newsletter5 = () => {
  return (
    <div>
      <form>

<div className={styles.etapa}>5/5</div>

<div>
 <h1>¡Aumentemos tus suscripciones</h1>
 <p>Es hora de personalizar tu campaña</p>
</div>

<div>
 <h2>Adjunta algún documento que desees compartir</h2>
 <input type='file' placeholder='Subir archivos' className={styles.input2}></input>
</div>

<Link to='/newsletter/1'>
 <button className={styles.botonSiguiente}>Finalizar</button>
</Link>
</form>
    </div>
  )
}

export default Newsletter5