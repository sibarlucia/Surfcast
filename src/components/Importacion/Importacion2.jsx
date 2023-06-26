import React, { useState , useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import styles from './importacion.module.css' 
import { ProgressBar } from '../General/ProgressBar'


const progressData = [
    {
        node: {
            text: 'Leads', 
            color: '#7D7DFE', 
            active: true 
        },
        line: {
            progress: 100, // porcentaje de la barra con color
            beginColor: '#7D7DFE',
            endColor: '#000000' // hace un degradado entre los dos colores si se activa 
        }
    },
    {
        node: {
            text: 'Personalización',
            color: '#001B8D',
            active: true 
        },
        line: {
          progress: 35, // porcentaje de la barra con color
          beginColor: '#001B8D',
          // endColor: '#000000' // hace un degradado entre los dos colores si se activa 
      }
    },
    {
        node: {
            text: 'Ejemplos',
            color: '#CECECE',
            active: false
        }
    },
    {
        node: {
            text: 'Últimos ajustes',
            color: '#CECECE',
            active: false
        }
    }
]

const Importacion2 = () => {

  const {step} = useParams()

  const [route, setRoute] = useState('')
  const [submit, setSubmit] = useState(false)

  const estiloBoton = styles.button4
  const botonSeleccionado = styles.seleccionado
  const [buttonClass1, setButtonClass1] = useState(estiloBoton)
  const [buttonClass2, setButtonClass2] = useState(estiloBoton)
  const [buttonClass3, setButtonClass3] = useState(estiloBoton)
  const [buttonClass4, setButtonClass4] = useState(estiloBoton)
  const [buttonClass5, setButtonClass5] = useState(estiloBoton)
  const [buttonClass6, setButtonClass6] = useState(estiloBoton)

  useEffect(() => {

  },[route])
  const handleButtonClick = (endpoint) => {
    setRoute(endpoint)
    setSubmit(true)
    
  }

  const handleButtonClass1 = () => {
    setButtonClass1(botonSeleccionado)
    setButtonClass2(estiloBoton)
    setButtonClass3(estiloBoton)
    setButtonClass4(estiloBoton)
    setButtonClass5(estiloBoton)
    setButtonClass6(estiloBoton)

  }

  const handleButtonClass2 = () => {
    setButtonClass1(estiloBoton)
    setButtonClass2(botonSeleccionado)
    setButtonClass3(estiloBoton)
    setButtonClass4(estiloBoton)
    setButtonClass5(estiloBoton)
    setButtonClass6(estiloBoton)
  }

  const handleButtonClass3 = () => {
    setButtonClass1(estiloBoton)
    setButtonClass2(estiloBoton)
    setButtonClass3(botonSeleccionado)
    setButtonClass4(estiloBoton)
    setButtonClass5(estiloBoton)
    setButtonClass6(estiloBoton)
  }

  const handleButtonClass4 = () => {
    setButtonClass1(estiloBoton)
    setButtonClass2(estiloBoton)
    setButtonClass3(estiloBoton)
    setButtonClass4(botonSeleccionado)
    setButtonClass5(estiloBoton)
    setButtonClass6(estiloBoton)  }

  const handleButtonClass5 = () => {
    setButtonClass1(estiloBoton)
    setButtonClass2(estiloBoton)
    setButtonClass3(estiloBoton)
    setButtonClass4(estiloBoton)
    setButtonClass5(botonSeleccionado)
    setButtonClass6(estiloBoton)
    }

const handleButtonClass6 = () => {
    setButtonClass1(estiloBoton)
    setButtonClass2(estiloBoton)
    setButtonClass3(estiloBoton)
    setButtonClass4(estiloBoton)
    setButtonClass5(estiloBoton)
    setButtonClass6(botonSeleccionado)  }
  console.log(route);
  return (
    <div>

      <form>
        <div className={styles.progressBar__container}>
                <ProgressBar
                    data={progressData}
                />
            </div>
        <h1>¿Qué quieres lograr con tu campaña?</h1>
        <h2>Definamos tus objetivos de prospección y los resultados que quieres obtener con tu campaña.</h2>

        <div className={styles.botonera}>
          <button type='button' className={buttonClass1} onClick={() => [handleButtonClick('/reunion/1'),handleButtonClass1()]}>Lograr reunirme con clientes potenciales</button>
          <button type='button' className={buttonClass2} onClick={() => [handleButtonClick('/webinar/1'),handleButtonClass2()]}>Invitar a un webinar o evento corporativo</button>
          <button type='button' className={buttonClass3} onClick={() => [handleButtonClick('/aumentarred/1'),handleButtonClass3()]}>Aumentar mi red de contactos</button>
          
        </div>
        <div className={styles.botonera}>
        <button type='button' className={buttonClass4}   onClick={() => [handleButtonClick('/newsletter/1'),handleButtonClass4()]}>Invitar a inscribirse a un newsletter</button>
          <button type='button' className={buttonClass5} onClick={() => [handleButtonClick('/producto/1'),handleButtonClass5()]}>Promocionar un producto</button>
          <button type='button' className={buttonClass6} onClick={() => [handleButtonClick('/importacion/1'),handleButtonClass6()]}>Otros</button>
        </div>
          <Link to={route}>
          <button type='submit' className={styles.botonSiguiente}>Elegir</button>
          </Link>

          <Link className={styles.volver} to='/perfilamiento/3'>
                <img src='/src/assets/volvernegro.png'/>
                </Link>
                <Link className={styles.continuar} to='/perfilamiento/3'>
                <img src='/src/assets/crearcampañadespues.png'/>
                </Link>
      </form>

    </div>
  )
}

export default Importacion2