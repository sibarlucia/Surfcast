export const userLogout = () => {

  window.localStorage.removeItem('auth-token')

  return {
    type: '@user/logout',
  } 
}