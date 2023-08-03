import axios from 'axios'
import { routeGenerator } from '../routegenerator'

const baseUrl = routeGenerator('/auth/login')
// const baseUrl = `https://011c-81-214-132-238.ngrok-free.app/auth/login`

// maneja el login
export const login = async ({ email = null, googleToken = null }) => {

    const response = await axios.post(baseUrl, {
        email,
        "google_id": "string",
        "google_token": googleToken
    })

    return response
}
