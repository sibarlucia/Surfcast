import store from '../Store/Index'

export const getToken = () => {
  const { user } = store.getState()
    
  return user.token
}