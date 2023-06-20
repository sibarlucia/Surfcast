import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Webinar from '../components/Webinar/Webinar'
import Webinar2 from '../components/Webinar/Webinar2'
import Webinar3 from '../components/Webinar/Webinar3'
import Webinar4 from '../components/Webinar/Webinar4'
import Webinar5 from '../components/Webinar/Webinar5'
import Webinar6 from '../components/Webinar/Webinar6'


const WebinarRender = () => {

    const params = useParams()
    const step = params.step

    if (step == null || step === '1') {
        return (
          <Webinar></Webinar>
        )
      }
      if (step === '2') {
        return (
          <Webinar2></Webinar2>
        )
      }
      if (step === '3') {
        return (
          <Webinar3></Webinar3>
        )
      }
      if (step === '4') {
        return (
          <Webinar4></Webinar4>
        )
      }
      if (step === '5') {
        return (
          <Webinar5></Webinar5>
        )
      }
      if (step === '6') {
        return (
          <Webinar6></Webinar6>
        )
      }
  
    
      return null
  }


export default WebinarRender