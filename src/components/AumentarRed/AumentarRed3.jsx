import React from 'react'
import styles from './aumentarRed.module.css'
import { Link } from 'react-router-dom'

const AumentarRed3 = () => {
  return (
    <div>
      <form>

<div className={styles.etapa}>3/3</div>

<div>
  <h1>Hagamos crecer tu red!</h1>
  <p>Es hora de personalizar tu campaña</p>
</div>

<div>
  <h2>Adjunta algún documento que desees compartir</h2>
  <input type='file' placeholder='Subir archivos' className={styles.input2}></input>
</div>

<Link to='/aumentarred/1'>
  <button className={styles.botonSiguiente}>Finalizar</button>
</Link>
</form>
    </div>
  )
}

export default AumentarRed3