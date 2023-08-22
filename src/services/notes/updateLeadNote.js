import axios from 'axios'
import { getToken } from '../getToken'
import { routeGenerator } from '../routegenerator'
import storage from '../../Store/Index'

const baseUrl = routeGenerator('/notes/notes')

export const updateLeadNote = async ({ updateText, editor = null, leadId }) => {
    const url = `${baseUrl}/${leadId}`

    if (!editor) {
        // por defecto utiliza el editor del token
        const user = storage.getState().user
        editor = user.userData.userId
    }

    const response = await axios.put(url, {
        markdown_note: updateText,
        editor_id: editor
    }, {
        headers: {
            access_token: getToken()
        }
    })

    return response

}