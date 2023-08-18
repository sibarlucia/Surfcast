import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLoginButton } from '../components/google/GoogleLoginButton'
import { login } from '../services/auth/Login'
import '/src/styles/stylesglobales.css'
import alert from 'sweetalert2'
import { useDispatch } from "react-redux"
import { userLoginAction } from '../Store/actions/user/userLoginAction'
import { userDataAction } from '../Store/actions/user/userDataAction'
import { getUserData } from '../services/auth/getUserData'
// import rutas from '../Routes/routes'

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleGoogleLogin = async (googleData) => {
        const response = await login({
            googleToken: googleData.access_token
        })

        const { data } = response

        dispatch(userLoginAction(data.access_token))
        dispatch(userDataAction({ userId: data.user }))
        const { data: userData } = await getUserData()

        if (userData.first_time) {
            navigate('/perfilamiento/1')
        } else {
            navigate('/home')
        }

    }

    const handleChangEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleClickOnAlreadyHaveAccount = (event) => {
        event.preventDefault()
        
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

            <form onSubmit={handleClickOnAlreadyHaveAccount}>
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
                {/* <div className='login__option'>
                    <label>
                        <img className='icon' src='/src/assets/linkedinicon.png'></img>
                        <input placeholder='LinkedIn'></input>
                    </label>
                </div> */}

                <div>
                    {/* <Link to="/perfilamiento/1">
                        <button className='button1'>Verificar y crear cuenta</button>
                    </Link> */}
                    <button
                        className='button2'
                        onClick={handleClickOnAlreadyHaveAccount}
                    >
                        Continuar
                    </button>

                </div>
        
            </form>
        </div>
      
      
    
    ) 
}


export default Login