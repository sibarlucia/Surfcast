import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Importacion from '../components/Importacion/Importacion'
import Importacion2 from '../components/Importacion/Importacion2'
import Importacion3 from '../components/Importacion/Importacion3'
import Importacion4 from '../components/Importacion/Importacion4'
import Importacion5 from '../components/Importacion/Importacion5'


const ImportacionRender = () => {
    const params = useParams()
    const step = params.step



 if (step === null || step === '1') {
      return (
        <Importacion></Importacion>
      )
    }
    if (step === '2') {
      return (
        <Importacion2></Importacion2>
      )
    }
    if (step === '3') {
      return (
        <Importacion3></Importacion3>
      )
    }
    if (step === '4') {
      return (
        <Importacion4></Importacion4>
      )
    }
    if (step === '5') {
      return (
        <Importacion5></Importacion5>
      )
    }

  
    return null
}


export default ImportacionRender