import AxiosApi from '../api'

const useAuthApi = () => {
  const { Axios } = AxiosApi()

  const signIn = async data => {
    return await Axios.post('/auth/signin', data)
  }

  const signUp = async data => {
    return await Axios.post('/auth/signup', data)
  }
  return { signIn, signUp }
}

export default useAuthApi
