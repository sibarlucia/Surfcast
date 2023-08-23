import axios from 'axios'
import { routeGenerator } from "../routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/audits/leads')


export const getActividadLead = async (lead_id) => {
    const url = `${baseUrl}/${lead_id}`

    const response = await axios.get(url, {
        headers: {
            access_token: getToken(),
            
        },

       
    }) 
    
    
    return response.data
};