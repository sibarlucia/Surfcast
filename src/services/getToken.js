import store from '../Store/Index'
// usar con access_token


export const getToken = () => {
    const { user } = store.getState()
    
    return user.token
}