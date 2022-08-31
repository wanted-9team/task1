export const getToken = () => {
  return localStorage.getItem('accessToken')
}

export const setToken = token => {
  return localStorage.setItem('accessToken', token)
}

export const removeToken = () => {
  if (typeof window !== 'undefined') return window.localStorage.clear()
  return undefined
}
