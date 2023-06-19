import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Perfilamiento from '../components/Perfilamientos/Perfilamiento'
import Perfilamiento2 from '../components/Perfilamientos/Perfilamiento2'
import Styles from '/src/styles/stylesglobales.css'
// import rutas from '../Routes/routes'

const Home = () => {
  return (
      <div id='home'>
        <div id='fondoimgmenu'>
          <img id='logo' src='src/assets/logo.png'/>
          <img id='peces' src="\src\assets\imgmenu.png"  />
        </div>

      <form>
      <h1>
        ¡HOLA!
      </h1>
      <p>Empecemos con tu correo y confirma el enlace de verificación que te llegará a tu bandeja de entrada</p>
        <div>
          <img className='icon' src='/src/assets/arroba.png'/>
        <input placeholder='Correo'></input>
        </div>
        <div>
          <img className='icon' src='/src/assets/gmailicon.png' ></img>
        <input placeholder='Google'></input>
        </div>
        <div>
          <img className='icon' src='/src/assets/linkedinicon.png'></img>
        <input placeholder='LinkedIn'></input>
        </div>

        <div>
          <Link to="/perfilamiento/1">
            <button className='button1'>Verificar y crear cuenta</button>
          </Link>
        <button className='button2'>Ya tengo cuenta</button>

        </div>
        
      </form>
      </div>
      
      
    
  ) 
}


export default Home