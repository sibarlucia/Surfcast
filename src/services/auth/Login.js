import axios from 'axios'
import { routeGenerator } from '../Routegenerator'

const baseUrl = routeGenerator('/auth/login')

// maneja el login
export const login = async ({ email }) => {
  const response = await axios.post(baseUrl, {
    email
    // "google_id": "string",
    // "google_token": "string"
  })

  return response
}
