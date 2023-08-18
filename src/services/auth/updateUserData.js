import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/auth/user/update')

// actualiza la info del usuario
export const updateUserData = async (newData) => {
    const {
        email,
        full_name,
        team,
        is_active,
        first_time,
        role,
        company_type,
        previus_experience
    } = newData

    const response = await axios.post(baseUrl, {
        email,
        full_name,
        team,
        is_active,
        first_time,
        role,
        company_type,
        previus_experience
    }, {
        headers: {
            access_token: getToken()
        }
    })

    return response
}