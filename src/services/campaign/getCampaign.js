import axios from 'axios'
import { routeGenerator } from "../routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/campaigns/get/')

// listado de campañas
export const getCampaign = async ({ skip = 0, limit = 100 }) => {
    const response = await axios.get(baseUrl, {
        headers: {
            access_token: getToken()
        },
        params: {
            skip,
            limit
        }
    }) 

    return response
}