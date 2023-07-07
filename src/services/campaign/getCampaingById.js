import axios from 'axios'
import { routeGenerator } from "../Routegenerator"
import { getToken } from '../getToken'

const baseUrl = routeGenerator('/campaigns/campaigns')

// recupera la informacion de una campaña
export const getCampaingById = async (campaingId) => {
  const url = `${baseUrl}/${campaingId}`

  const response = await axios.get(url, {
    headers: {
      authorization: getToken()
    }
  }) 

  return response
}