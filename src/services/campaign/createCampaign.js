import axios from 'axios'
import { routeGenerator } from "../Routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/campaigns/campaigns/')
// crea de campañas
export const createCampaign = async ({ name, owner_id = 0, email_bool = true, linkedin_bool = true, state = "draft"}) => {
    const response = await axios.post(baseUrl, {
        name,
        owner_id,
        email_bool,
        linkedin_bool,
        state
    },{
        headers: {
            authorization: getToken()
        }
    }) 

    return response
}