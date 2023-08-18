import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

// recupera las notas del lead
export const getLeadNotes = async ({ leadId, skip = 0, limit = 500 }) => {
    const baseUrl = routeGenerator(`/notes/leads/${leadId}/notes/`)
    const response = await axios.get(baseUrl, {
        headers:{
            Authorization: getToken()
        },
        params: {
            skip,
            limit
        }
    })

    return response
}