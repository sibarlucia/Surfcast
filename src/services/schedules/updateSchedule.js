import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/schedules/update/by-campaign')

// actualiza un schedule
export const updateSchedules = async ({
    campain_id,
    monday_bool,
    tuesday_bool,
    wednesday_bool,
    thursday_bool,
    friday_bool,
    saturday_bool,
    sunday_bool,
    monday_time,
    tuesday_time,
    wednesday_time,
    thursday_time,
    friday_time,
    saturday_time,
    sunday_time,
    timezone,
    id
}) => {

    const url = `${baseUrl}/${campain_id}`
    const response = await axios.put(url, {
        campain_id,
        monday_bool,
        tuesday_bool,
        wednesday_bool,
        thursday_bool,
        friday_bool,
        saturday_bool,
        sunday_bool,
        monday_time,
        tuesday_time,
        wednesday_time,
        thursday_time,
        friday_time,
        saturday_time,
        sunday_time,
        timezone,
        id
    }, {
        headers: {
            access_token: getToken()
        }
    })

    return response
}
