import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/leads/leads/upload')

// sube los archivos de leads
export const uploadLeadsByFile = async (campaingId, file) => {
    const url = `${baseUrl}/${campaingId}`
    const response = await axios.postForm(url, {
        file
    }, {
        headers: {
            Authorization: getToken()
        }
    })

    return response
}