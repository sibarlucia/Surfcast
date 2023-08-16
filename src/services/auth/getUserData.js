import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import storage from '../../Store/Index'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/auth/user')

// obtiene la info del usuario
export const getUserData = async () => {
    const user = storage.getState().user

    const response = await axios.post(baseUrl, {
        access_token: user.token,
        token_type: "bearer",
        user: user.userData.userId
    }, {
        headers: {
            access_token: getToken()
        }
    })

    return response
}