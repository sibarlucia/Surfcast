import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { auhtenticate } from "../services/auth/auhtenticate"
import { userLoginAction } from "../Store/actions/user/userLoginAction"
import { useDispatch } from "react-redux"
import alert from 'sweetalert2'

// manjea el token de autentificacion
const LoginToken = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [params] = useSearchParams()

  useEffect(() => {
    const token = params.get('token')
    auhtenticate({ access_token: token })
      .then(response => {
        const finalToken = response.data.access_token
        dispatch(userLoginAction(finalToken))
        navigate('/home')
      })
      .catch(error => {
        console.error(error)
        alert.fire({
          title: 'Oops!',
          text: 'Algo fallo al iniciar sesión',
          icon: 'error',
        })
        navigate('/login')
      }) 


  }, [params, navigate, dispatch])

  return (
    null
  )    

}

export default LoginToken