import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator(`/notes/leads`)

// recupera las notas del lead
export const getLeadNotes = async ({ leadId }) => {
    const url = `${baseUrl}/${leadId}`

    const response = await axios.get(url, {
        headers:{
            access_token: getToken()
        }
    })

    return response
}