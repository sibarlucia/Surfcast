import React, { useEffect, useState } from 'react'
import styles from './aumentarRed.module.css'
import { Link } from 'react-router-dom'

const AumentarRed3 = () => {


  const [popUp, setPopUp] = useState(false)
  const [effect, setEffect] = useState()

  const blur = styles.blur 


  const handleFinalizar = () => {
    setPopUp(true)
    setEffect(blur)
  }

  useEffect(() => {

  },[popUp])

  return (
    <div>
      <form className={effect}>

      {popUp == true && (<div className={styles.fondoImg}><img className={styles.imagenFinalizar} src='/src/assets/popUp.png'/></div>)}


<div className={styles.etapa}>3/3</div>

<div>
  <h1>Hagamos crecer tu red!</h1>
  <p>Es hora de personalizar tu campaña</p>
</div>

<div>
  <h2>Adjunta algún documento que desees compartir</h2>
  <input type='file' placeholder='Subir archivos' className={styles.input2}></input>
</div>

<Link to='/aumentarred/3'>
  <button className={styles.botonSiguiente} onClick={() => handleFinalizar()}>Finalizar</button>
</Link>
</form>
    </div>
  )
}

export default AumentarRed3