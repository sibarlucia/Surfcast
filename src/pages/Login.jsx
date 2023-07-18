import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLoginButton } from '../components/google/GoogleLoginButton'
import { login } from '../services/auth/Login'
import '/src/styles/stylesglobales.css'
import alert from 'sweetalert2'
// import rutas from '../Routes/routes'

const Login = () => {
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleGoogleLogin = (userData) => { 
        console.log('login con google', userData)
        navigate('/perfilamiento/1')
    }

    const handleChangEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleClickOnAlreadyHaveAccount = (event) => {
        if (!email) {
            return
        }
        login({ email })
            .then(() => {
                alert.fire({
                    title: 'Correo enviado',
                    text: 'Revisa tu correo para iniciar sesión',
                    icon: 'success',
                })
            })
            .catch(error => {
                console.log(error)
                alert.fire({
                    title: 'Oops!',
                    text: 'Algo fallo al iniciar sesión',
                    icon: 'error',
                })
            })

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
                        <input
                            placeholder='Correo'
                            type='email'
                            value={email}
                            onChange={handleChangEmail}
                        ></input>
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
                    <button
                        className='button2'
                        type='button'
                        onClick={handleClickOnAlreadyHaveAccount}
                    >
                        Ya tengo cuenta
                    </button>

                </div>
        
            </form>
        </div>
      
      
    
    ) 
}


export default Login