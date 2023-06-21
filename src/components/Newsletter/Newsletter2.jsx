import React from 'react'
import styles from './newsletter.module.css'
import { Link } from 'react-router-dom'

const Newsletter2 = () => {
  return (
    <div>
      <form>

<div className={styles.etapa}>2/5</div>

<div>
<h1>¡Aumentemos tus suscripciones!</h1>
<p>Es hora de personalizar tu campaña</p>
</div>

<div>
<h2>¿Con qué frecuencia se publicará?</h2>


<div className={styles.dias}>
  <button type='button' className={styles.dia}>DOM</button>
  <button type='button' className={styles.dia}>LUN</button>
  <button type='button' className={styles.dia}>MAR</button>
  <button type='button' className={styles.dia}>MIER</button>
  <button type='button' className={styles.dia}>JUE</button>
  <button type='button' className={styles.dia}>VIER</button>
  <button type='button' className={styles.dia}>SAB</button>
</div>


</div>

<Link to='/newsletter/3'>
<button className={styles.botonSiguiente}>Siguiente</button>
</Link>
</form>
    </div>
  )
}

export default Newsletter2