import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'



const perfilamiento6 = () => {
  const {step} = useParams()
  return (
    <div className='perfilamiento'>
      <form>
        <h1>¡EMPECEMOS TU PRIMERA CAMPAÑA!</h1>
        <h2>Si aún no estás seguro puedes crearla después</h2>

        <div>
        <Link to='/'>
            <button className='botonclarito'>Dejarlo para después</button>
        </Link>

        <Link to='/importacion'>
            <button className='botonContinuar'>Continuar</button>
        </Link>
        </div>
      </form>

    </div>
  )
}

export default perfilamiento6