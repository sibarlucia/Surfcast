import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Producto from '../components/Productos/Producto'
import Producto2 from '../components/Productos/Producto2'
import Producto3 from '../components/Productos/Producto3'
import Producto4 from '../components/Productos/Producto4'
import Producto5 from '../components/Productos/Producto5'

const ProductoRender = () => {
    const params = useParams()
    const step = params.step
  
    if (step === '1') {
      return (
        <Producto></Producto>
      )
    }
    if (step === '2') {
      return (
        <Producto2></Producto2>
      )
    }
    if (step === '3') {
      return (
        <Producto3></Producto3>
      )
    }
    if (step === '4') {
      return (
        <Producto4></Producto4>
      )
    }
    if (step === '5') {
      return (
        <Producto5></Producto5>
      )
    }

  
    return null
}

export default ProductoRender