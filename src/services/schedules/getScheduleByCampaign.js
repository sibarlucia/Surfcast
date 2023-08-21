import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('schedules')

// recupera la info de un schedule por id de campaign
export const getScheduleByCampaign = async ({ campaignId }) => {

    const url = `${baseUrl}/${campaignId}`

    const response = await axios.get(url, {
        headers: {
            access_token: getToken()
        }
    })

    return response
}
