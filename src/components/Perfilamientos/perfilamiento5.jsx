import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import styles from './perfilamiento.module.css'



const perfilamiento6 = () => {
  const {step} = useParams()
  return (
    <div className={styles.perfilamiento}>
      <form>
        <h1>¡EMPECEMOS TU PRIMERA CAMPAÑA!</h1>
        <h2>Si aún no estás seguro puedes crearla después</h2>

        <div>
        <Link to='/'>
            <button className='botonclarito'>Dejarlo para después</button>
        </Link>

        <Link to='/importacion/1'>
            <button className='botonContinuar'>Continuar</button>
        </Link>

        <Link className={styles.volver} to='/perfilamiento/4'>
        <img src='/src/assets/volverblanco.png'/>
        </Link>
        </div>
      </form>

    </div>
  )
}

export default perfilamiento6