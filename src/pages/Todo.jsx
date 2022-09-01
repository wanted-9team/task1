import React, { useEffect, useState } from 'react'
import TodoCreate from '../components/todo/TodoCreate'
import TodoHead from '../components/todo/TodoHead'
import TodoList from '../components/todo/TodoList'
import { removeToken, getToken } from '../utils/token'
import useTodoApi from '../utils/useTodoApi'
import { LogoutBtnBox, LogoutBtn, TodoTemplateBlock } from '../styles/Todo.style'
import { Navigate } from 'react-router-dom'
import { ToastBox } from '../styles/Auth.style'

localStorage.getItem('accessToken')

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const { getTodos } = useTodoApi()

  useEffect(() => {
    try {
      getTodos().then(res => {
        if (res.status === 200) {
          setTodos(res.data)
        }
      })
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    const toastTimer = setTimeout(() => {
      setErrorMessage('')
    }, 4000)
    return () => clearTimeout(toastTimer)
  }, [errorMessage])

  return localStorage.getItem('accessToken') ? (
    <>
      <ToastBox errorMessage={errorMessage}>{errorMessage}</ToastBox>
      <LogoutBtnBox>
        <LogoutBtn
          onClick={() => {
            removeToken()
            window.location.reload()
          }}
        >
          로그아웃
        </LogoutBtn>
      </LogoutBtnBox>
      <TodoTemplateBlock>
        <TodoHead />
        <TodoList todos={todos} setTodos={setTodos} setErrorMessage={setErrorMessage} />
        <TodoCreate setTodos={setTodos} />
      </TodoTemplateBlock>
    </>
  ) : (
    <Navigate replace to={'/'} />
  )
}

export default Todo
