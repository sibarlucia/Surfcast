import axios from 'axios'
import { routeGenerator } from "../Routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/campaigns/campaigns')

// recupera la informacion de una campaña
export const getcampaignById = async (campaignId) => {
    const url = `${baseUrl}/${campaignId}`

    const response = await axios.get(url, {
        headers: {
            authorization: getToken()
        }
    }) 

    return response
}