import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/responses/responses/')

// crea una respuesta de un formulario
export const createResponse = async ({ question_name, type, answer, campaign_id  }) => {
    const response = await axios.post(baseUrl, {
        question_name,
        type,
        answer,
        campaign_id
    }, {
        headers: {
            Authorization: getToken()
        }
    })

    return response 
}