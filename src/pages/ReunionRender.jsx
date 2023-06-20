import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Reunion from '../components/Reunion/Reunion'
import Reunion2 from '../components/Reunion/Reunion2'
import Reunion3 from '../components/Reunion/Reunion3'
import Reunion4 from '../components/Reunion/Reunion4'
import Reunion5 from '../components/Reunion/Reunion5'
import Reunion6 from '../components/Reunion/Reunion6'

const ReunionRender = () => {
  const params = useParams()
    const step = params.step
  
    if (step == null || step === '1') {
      return (
        <Reunion></Reunion>
      )
    }
    if (step === '2') {
      return (
        <Reunion2></Reunion2>
      )
    }
    if (step === '3') {
      return (
        <Reunion3></Reunion3>
      )
    }
    if (step === '4') {
      return (
        <Reunion4></Reunion4>
      )
    }
    if (step === '5') {
      return (
        <Reunion5></Reunion5>
      )
    }
    if (step === '6') {
      return (
        <Reunion6></Reunion6>
      )
    }

  
    return null
}


export default ReunionRender