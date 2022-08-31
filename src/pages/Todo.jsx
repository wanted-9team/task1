import React from 'react'
import { Navigate } from 'react-router-dom'

const Todo = () => {
  return localStorage.getItem('accessToken') ? (
    <div>Todasdfasdfo</div>
  ) : (
    <Navigate replace to={'/'} />
  )
}

export default Todo
