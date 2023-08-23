import axios from 'axios'
import { getToken } from '../getToken'
import { routeGenerator } from '../routegenerator'

const baseUrl = routeGenerator('/leads/leads')

export const getLeadById = async (leadId) => {
    const url = `${baseUrl}/${leadId}`

    const response = await axios.get(url, {
        headers: {
            token: getToken()
        }
    })

    return response

}