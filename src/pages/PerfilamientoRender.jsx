import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Perfilamiento from '../components/Perfilamientos/Perfilamiento'
import Perfilamiento2 from '../components/Perfilamientos/Perfilamiento2'
import Perfilamiento3 from '../components/Perfilamientos/Perfilamiento3'
import Perfilamiento4 from '../components/Perfilamientos/Perfilamiento4'
import Perfilamiento5 from '../components/Perfilamientos/Perfilamiento5'

import '../styles/stylesglobales.css'

const PerfilamientoRender = () => {
  const params = useParams()
  const step = params.step

  if (step === null || step === '1') {
    return (
      <Perfilamiento></Perfilamiento>
    )
  }
  if (step === '2') {
    return (
      <Perfilamiento2></Perfilamiento2>
    )
  }
  if (step === '3') {
    return (
      <Perfilamiento3></Perfilamiento3>
    )
  }
  if (step === '4') {
    return (
      <Perfilamiento4></Perfilamiento4>
    )
  }
  if (step === '5') {
    return (
      <Perfilamiento5></Perfilamiento5>
    )
  }

  return null

}

export default PerfilamientoRender