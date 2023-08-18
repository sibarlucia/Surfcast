import axios from 'axios'
import { getToken } from '../getToken'
import { routeGenerator } from '../routegenerator'

const baseUrl = routeGenerator('/leads/campaigns')

export const getLeadsByCampaign = async (campaignId) => {
    const url = `${baseUrl}/${campaignId}/leads/`

    const response = await axios.get(url, {
        headers: {
            token: getToken()
        }
    })

    return response

}
