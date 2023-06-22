import axios from 'axios'

const baseUrl = 'https://www.googleapis.com/oauth2/v1/userinfo'

export const getGoogleUser = async ({ token }) => {
  const url = `${baseUrl}?access_token=${token}`

  const response = await axios.get(url, {
    Headers: {
      Authorization: `Bearer ${token}`,
    }
  })

  return response

}