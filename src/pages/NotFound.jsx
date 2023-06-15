import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/notFound.css'

const NotFound = () => {
  return (
    <main className='notFound'>
      <div className='notFount__hero'>
        <img
          className='notFount__hero__logo'
          src={logo}
          alt="surftcast"
        />
        <h1
          className='notFount__hero__title'
        >
          404  
        </h1>
      </div>
      <div className='notFount__infoContainer'>
        <h2 className='notFount__infoContainer__title'>
          No pudimos encontrar la página que buscas
        </h2>
        <Link
          to={'/'}
          className='notFount__infoContainer__button'
        >
          Volver al Home
        </Link>
      </div>
    </main>
  ) 
}

export default NotFound