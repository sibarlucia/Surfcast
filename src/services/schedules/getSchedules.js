import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('schedules')

// recupera la info de los schedules
export const getSchedules = async () => {

    const response = await axios.get(baseUrl, {
        headers: {
            access_token: getToken()
        }
    })

    return response
}
