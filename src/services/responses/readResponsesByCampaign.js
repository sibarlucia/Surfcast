import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

export const readResponsesBycampaign = async ({ campaign_id, skip = 0, limit = 500 }) => {
  
    const baseUrl = routeGenerator(`/responses/campaigns/${campaign_id}`)
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