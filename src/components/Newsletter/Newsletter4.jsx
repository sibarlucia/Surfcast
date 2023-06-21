import React from 'react'
import styles from './newsletter.module.css'
import { Link } from 'react-router-dom'

const Newsletter4 = () => {
  return (
    <div>
      <form>

<div className={styles.etapa}>4/5</div>

<div>
  <h1>¡Aumentemos tus suscripciones</h1>
  <p>Es hora de personalizar tu campaña</p>
</div>

<div>
<h2>Método de suscripción</h2>
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

<Link to='/newsletter/5'>
  <button className={styles.botonSiguiente}>Siguiente</button>
</Link>
</form>
    </div>
  )
}

export default Newsletter4