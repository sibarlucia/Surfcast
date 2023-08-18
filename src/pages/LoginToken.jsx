import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { auhtenticate } from "../services/auth/auhtenticate"
import { userLoginAction } from "../Store/actions/user/userLoginAction"
import { useDispatch } from "react-redux"
import alert from 'sweetalert2'
import { userDataAction } from "../Store/actions/user/userDataAction"

// manjea el token de autentificacion
const LoginToken = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [params] = useSearchParams()

    useEffect(() => {
        const token = params.get('token')
        auhtenticate({ access_token: token })
            .then(response => {
                const { data } = response
                const finalToken = data.access_token
                const userId = data.user
                
                dispatch(userLoginAction(finalToken))
                dispatch(userDataAction({ userId }))
                
                if (data.first_time) {
                    navigate('/perfilamiento/1')
                } else {
                    navigate('/home')
                }
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