import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/messages/leads')

export const getMessagesOfLead = async (leadId) => {
    const url = `${baseUrl}/${leadId}`

    const response = await axios.get(url, {
        headers: {
            access_token: getToken()
        }
    })

    return response 
}