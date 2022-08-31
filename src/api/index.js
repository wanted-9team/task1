import axios from 'axios'
import { getToken } from '../utils/token.js'

const baseURL = 'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com'

let token
if (getToken()) {
  // token = getToken().replace(/\"/gi, '')
}

export const tokenAxios = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
})

// createTodo, updateTodo
export const todoAxios = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
