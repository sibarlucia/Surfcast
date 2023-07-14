import axios from 'axios'
import { routeGenerator } from "../Routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/campaigns/campaigns/')

// listado de campañas
export const getCampaign = async () => {
    const response = await axios.get(baseUrl, {
        headers: {
            authorization: getToken()
        }
    }) 

    return response
}