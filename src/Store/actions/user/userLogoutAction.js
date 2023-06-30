export const userLogoutAction = () => {

  window.localStorage.removeItem('sc-auth-token')

  return {
    type: '@user/logout',
  } 
}