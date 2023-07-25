import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/leads/leads/upload/')

// sube los archivos de leads
export const uploadLeadsByFile = async (file) => {
    // TODO: incluir el id de la campaña
    const response = await axios.postForm(baseUrl, {
        file
    }, {
        headers: {
            Authorization: getToken()
        }
    })

    return response
}