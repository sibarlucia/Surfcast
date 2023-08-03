import axios from 'axios'
import { routeGenerator } from "../routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/campaigns/campaigns')

// actualiza  la informacion de una campaña
export const updateCampaign = async ({ name, email_bool, email_sender, linkedin_bool, linkedin_sender, objective, state, active, campaignId }) => {
    const url = `${baseUrl}/${campaignId}`

    const response = await axios.put(url, {
        name,
        email_bool,
        email_sender,
        linkedin_bool,
        linkedin_sender,
        objective,
        state,
        active    
    }, {
        headers: {
            authorization: getToken()
        }
    }) 

    return response
}