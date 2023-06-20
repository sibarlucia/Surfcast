import React, { useState , useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Styles from '/src/styles/importacion.css' 
import Importacion3 from './Importacion3'


const Importacion2 = () => {

  const {step} = useParams()

  const [route, setRoute] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleButtonClick = (endpoint) => {
    setRoute(endpoint)
    setSubmit(true)
  }

  useEffect(() => {

  },[route])

  console.log(route);
  return (
    <div>

      <form>
        <h1>¿Qué quieres lograr con tu campaña?</h1>
        <h2>Definamos tus objetivos de prospección y los resultados que quieres obtener con tu campaña.</h2>

        <div className='botonera'>
          <button type='button' className='button4' onClick={() => handleButtonClick('/reunion')}>Lograr reunirme con clientes potenciales</button>
          <button type='button' className='button4' onClick={() => handleButtonClick('/webinar')}>Invitar a un webinar o evento corporativo</button>
          <button type='button' className='button4' onClick={() => handleButtonClick('/aumentarred')}>Aumentar mi red de contactos</button>
          
        </div>
        <div className='botonera'>
        <button type='button' className='button4'   onClick={() => handleButtonClick('/newsletter')}>Invitar a inscribirse a un newsletter</button>
          <button type='button' className='button4' onClick={() => handleButtonClick('/producto/1')}>Promocionar un producto</button>
          <button type='button' className='button4' >Otros</button>
        </div>
          <Link to={route}>
          <button type='submit' className='botonSiguiente'>Elegir</button>
          </Link>
      </form>

    </div>
  )
}

export default Importacion2