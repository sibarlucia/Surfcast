import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const perfilamiento6 = () => {
  return (
    <div className='perfilamiento'>
      <form>
        <h1>¡EMPECEMOS TU PRIMERA CAMPAÑA!</h1>
        <h2>Si aún no estás seguro puedes crearla después</h2>

        <div>
        <Link to='/'>
            <button className='botonContinuar'>Dejarlo para después</button>
        </Link>

        <Link to='/'>
            <button className='botonContinuar'>Continuar</button>
        </Link>
        </div>
      </form>

    </div>
  )
}

export default perfilamiento6