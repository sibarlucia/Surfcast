import React from 'react'
import styles from './aumentarRed.module.css'
import { Link } from 'react-router-dom'

const AumentarRed = () => {
  return (
    <div>
      <form>

<div className={styles.etapa}>1/3</div>

<div>
  <h1>¡Hagamos crecer tu red!</h1>
  <p>Es hora de personalizar tu campaña</p>
</div>

<div>
  <h2>¿A qué tipo de personas te gustaría agregar?</h2>
  <select>
    <option>En qué rubro se encuentra</option>
    <option>Opción 1</option>
    <option>Opción 2</option>
    <option>Opción 3</option>
  </select>
  <select>
    <option>En qué país se desarrolla</option>
    <option>Opción 1</option>
    <option>Opción 2</option>
    <option>Opción 3</option>
  </select>
  <select>
    <option>Qué puesto tiene</option>
    <option>Opción 1</option>
    <option>Opción 2</option>
    <option>Opción 3</option>
  </select>
</div>

<Link to='/aumentarred/2'>
<button type='submit' className={styles.botonSiguiente}>Siguiente</button>
</Link>
</form>

    </div>
  )
}

export default AumentarRed