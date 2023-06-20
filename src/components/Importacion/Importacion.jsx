import React, { useState , useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Styles from '/src/styles/importacion.css' 
import Importacion2 from './Importacion2'


const Importacion = () => {

  const {step} = useParams()


    const [boton, setBoton] = useState('')
    const [submit, setSubmit] = useState(false)

   const handleButtonClick = (accion) => {
    setBoton(accion)
    setSubmit(true)
   }

   const handleSubmit = (event) => {
    event.preventDefault()
    // setSubmit(true)
   }
   

    useEffect(() => {
        
    },[boton])

  return (
    <div className='importacion' >

        


            <form onSubmit={handleSubmit}>
            <section>
                <article className='fase'>
                    <img className='circulo' src='/src/assets/tick.png' />
                    <p>Leads</p>
                </article>  

                <article>

                    <img className='barrita' src='/src/assets/1a2.png' /><img className='circulito' src='/src/assets/circulito.png' />
                </article>


                <article className='fase'>
                    <img className='circulo' src='/src/assets/2.png' />
                    <p>Personalización</p>
                </article>  

                <article>

                    <img className='barrita' src='/src/assets/barrita.png' />
                </article>


                <article className='fase'>
                    <img className='circulo' src='/src/assets/3.png' />
                    <p>Ejemplos</p>
                </article>  

                <article>

                    <img className='barrita' src='/src/assets/barrita.png' />
                </article>

                <article className='fase'>
                    <img className='circulo' src='/src/assets/4.png' />
                    <p>Últimos ajustes</p>
                </article>  

               
            </section>

            <div>

                <h1>Escoge el método para importar tus leads</h1>
                <h2>Así podremos conocer, clasificar y desarrollar adecuadamente a tu público objetivo.</h2>
            </div>

            <div>

                <p>¿Cómo se llamará tu lista?</p>
                <input type='text' placeholder='CEO y fundadores, Ventas, Managers...'/>
            </div>



                <div>
                <p>¿Cómo te gustaría importarlos?</p>
                <button className='button3' onClick={() => handleButtonClick('buscar')}>Búsqueda de Linkedin</button>
                <button className='button3' onClick={() => handleButtonClick('cargar')}>Cargar Archivo CSV</button>
                <button className='button3' onClick={() => handleButtonClick('usar')}>Usando AI</button>
                </div>

                {boton === 'buscar' && (
                    <input type='text' name='buscar' placeholder='https://www.linkedin.com/search/' />
                )}

                {boton === 'cargar' && (
                    <div>
                        <label htmlFor='fileInput'>Subir archivos</label>,
                        <input type='file' name='cargar'/>

                    </div>
                )}

                <Link to='/importacion/2'>
                    <button className='button2' type='submit' disabled={!submit}>Importar Leads</button> 
                </Link>

            </form>



    </div>
  )
}

export default Importacion