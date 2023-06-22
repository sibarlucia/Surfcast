import { Link, useNavigate } from 'react-router-dom'
import { GoogleLoginButton } from '../components/google/GoogleLoginButton'
import '/src/styles/stylesglobales.css'
// import rutas from '../Routes/routes'

const Home = () => {
  
  const navigate = useNavigate()

  const handleGoogleLogin = (userData) => { 
    console.log('login con google', userData)
    navigate('/perfilamiento/1')
  }
  
  return (
    <div id='home'>
      <div id='fondoimgmenu'>
        <img id='logo' src='src/assets/logo.png'/>
        <img id='peces' src="\src\assets\imgmenu.png"  />
      </div>

      <form>
        <h1>
          ¡HOLA!
        </h1>
        <p>
          Empecemos con tu correo y confirma el enlace de verificación que te llegará a tu bandeja de entrada
        </p>
        <div className='login__option'>
          <label>
            <img className='icon' src='/src/assets/arroba.png'/>
            <input placeholder='Correo'></input>
          </label>
        </div>
        <div className='login__option'>
          <label>
            <img className='icon' src='/src/assets/gmailicon.png' ></img>
            <GoogleLoginButton
              className='loginButton'
              onLogin={handleGoogleLogin}
            >
              Google
            </GoogleLoginButton>
          </label>
        </div>
        <div className='login__option'>
          <label>
            <img className='icon' src='/src/assets/linkedinicon.png'></img>
            <input placeholder='LinkedIn'></input>
          </label>
        </div>

        <div>
          <Link to="/perfilamiento/1">
            <button className='button1'>Verificar y crear cuenta</button>
          </Link>
          <button className='button2'>Ya tengo cuenta</button>

        </div>
        
      </form>
    </div>
      
      
    
  ) 
}


export default Home