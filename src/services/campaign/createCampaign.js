import axios from 'axios'
import { routeGenerator } from "../routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/campaigns/add/')
// crea de campañas
export const createCampaign = async ({ name, email_bool = true, linkedin_bool = true, active = false, state = "draft"}) => {
    const response = await axios.post(baseUrl, {
        name,
        email_bool,
        linkedin_bool,
        active,
        state
    },{
        headers: {
            access_token: getToken()
        }
    }) 

    return response
}