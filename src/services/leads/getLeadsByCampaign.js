import axios from 'axios'
import { getToken } from '../getToken'
import { routeGenerator } from '../Routegenerator'

const baseUrl = routeGenerator('/leads/campaigns/')

export const getLeadsByCampaign = async (campaignId) => {
    const url = `${baseUrl}/${campaignId}/leads/`

    return { // para test, borrar en prod
        data: defaultData
    }

    const response = await axios.get(url, {
        headers: {
            token: getToken()
        }
    })

    return response

}
// datos de prueba
var defaultData = [
    {
        "profile_url": "string",
        "full_name": "nombre 1",
        "first_name": "nombre",
        "last_name": "1",
        "additional_info": "string",
        "job": "CTO de Surfcast",
        "shared_connections": 0,
        "common_connection1": "string",
        "url": "string",
        "name": "string",
        "query": "string",
        "category": "string",
        "timestamp": "Abril 26, 2023",
        "location": "Chile",
        "company_name": "string",
        "campaign_id": 2,
        "id": 1
    },
    {
        "profile_url": "string",
        "full_name": "aanombre 2",
        "first_name": "nombre",
        "last_name": "2",
        "additional_info": "string",
        "job": "CTO de Surfcast",
        "shared_connections": 0,
        "common_connection1": "string",
        "url": "string",
        "name": "string",
        "query": "string",
        "category": "string",
        "timestamp": "Abril 26, 2023",
        "location": "Chile",
        "company_name": "string",
        "campaign_id": 2,
        "id": 2
    },
  
]