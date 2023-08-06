import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('campaigns/campaigns')

// sube los archivo de campaña
export const addCampaignDocument = async (campaingId, file) => {

    const formatedTime = file.type.split('/')[0]

    const url = `${baseUrl}/${campaingId}/documents/${formatedTime}`
    const response = await axios.postForm(url, {
        file
    }, {
        headers: {
            Authorization: getToken()
        }
    })

    return response
}