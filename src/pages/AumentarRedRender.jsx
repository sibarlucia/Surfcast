import React from 'react'
import { Link, useParams } from 'react-router-dom'
import AumentarRed from '../components/AumentarRed/AumentarRed'
import AumentarRed2 from '../components/AumentarRed/AumentarRed2'
import AumentarRed3 from '../components/AumentarRed/AumentarRed3'

const AumentarRedRender = () => {

    const params = useParams()
    const step = params.step

    if (step == null || step === '1') {
        return (
          <AumentarRed></AumentarRed>
        )
      }
      if (step === '2') {
        return (
          <AumentarRed2></AumentarRed2>
        )
      }
      if (step === '3') {
        return (
          <AumentarRed3></AumentarRed3>
        )
      }
    }
export default AumentarRedRender