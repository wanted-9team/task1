export const getToken = () => {
  return localStorage.getItem('accessToken')
}

export const setToken = token => {
  return localStorage.setItem('accessToken', token)
}
