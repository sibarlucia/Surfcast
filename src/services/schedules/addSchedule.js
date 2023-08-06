import axios from 'axios'
import { routeGenerator } from '../routegenerator'
import { getToken } from '../getToken'

const baseUrl = routeGenerator('schedules/add/')

// crea un schedule
export const addSchedules = async ({
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
    timezone}) => {

    const response = await axios.post(baseUrl, {
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
        timezone
    }, {
        headers: {
            access_token: getToken()
        }
    })

    return response
}
