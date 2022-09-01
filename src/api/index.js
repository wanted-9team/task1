import axios from 'axios'
import { useMemo } from 'react'
import { getToken } from '../utils/token.js'

const baseURL = `https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com`

const AxiosApi = () => {
  const token = useMemo(() => {
    if (getToken()) {
      return getToken().replace(/\"/gi, '')
    }
  }, [localStorage.getItem('accessToken')])

  const tokenAxios = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const Axios = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-type': 'application/json',
    },
  })

  // createTodo, updateTodo
  const todoAxios = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  return { tokenAxios, Axios, todoAxios }
}

export default AxiosApi
