import axios from 'axios'
import { getToken } from '../getToken'
import { routeGenerator } from '../routegenerator'
import storage from '../../Store/Index'

const baseUrl = routeGenerator('/notes/notes')

export const addLeadNote = async ({ updateText, editor = 0, leadId, campaignId }) => {

    if (!editor) {
        // por defecto utiliza el editor del token
        const user = storage.getState().user
        editor = user.userData.userId
    }

    const response = await axios.post(baseUrl, {
        markdown_note: updateText,
        owner_id: editor,
        editor_id: editor,
        lead_id: leadId,
        campaign_id: campaignId
    }, {
        headers: {
            access_token: getToken()
        }
    })

    return response
}