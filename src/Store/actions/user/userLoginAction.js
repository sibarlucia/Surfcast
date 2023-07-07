export const userLoginAction = (token) => {
  
  window.localStorage.setItem('sc-auth-token', token)

  return {
    type: '@user/login',
    token
  }
}