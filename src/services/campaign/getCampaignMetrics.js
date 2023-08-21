import axios from 'axios'
import { routeGenerator } from "../routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/dashboard/campaign-metrics/')


export const getMetrics = async () => {
    const response = await axios.get(baseUrl, {
        headers: {
            access_token: getToken(),
            
        },

        
    }) 
    
    
    return response.data
};