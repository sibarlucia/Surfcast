import axios from 'axios'
import { routeGenerator } from '../Routegenerator'

const baseUrl = routeGenerator('/auth/auhtenticate')

// usado para recuperar el token para consumir las apis en base al token del login
export const auhtenticate = async ({ access_token }) => {

  // return { // para test
  //   data: {
  //     access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWFuY2FycmVybzgxMUBnbWFpbC5jb20iLCJmaXJzdF90aW1lIjp0cnVlLCJleHAiOjE2OTA1NzgyNTl9.le0K-ybZWVBzMTE2qMCzi1aXT8-Y0bKNG1OV576tBlM'
  //   }
  // }

  const response = await axios.post(baseUrl, {
    access_token,
    token_type: "string"
  })

  return response
}
