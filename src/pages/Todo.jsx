import React, { useEffect, useState } from 'react'
import TodoCreate from '../components/todo/TodoCreate'
// import TodoHead from '../components/todo/TodoHead'
import TodoList from '../components/todo/TodoList'
// import { removeToken } from '../utils/token'
import { getTodos } from '../utils/todo'
import { LogoutBtnBox, LogoutBtn, TodoTemplateBlock } from '../styles/Todo.style'
import { Navigate } from 'react-router-dom'

const Todo = () => {
  const [todos, setTodos] = useState([])

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

  return localStorage.getItem('accessToken') ? (
    <>
      <LogoutBtnBox>
        <LogoutBtn
          onClick={() => {
            // removeToken()
            window.location.reload()
          }}
        >
          로그아웃
        </LogoutBtn>
      </LogoutBtnBox>
      <TodoTemplateBlock>
        {/* <TodoHead /> */}
        <TodoList todos={todos} />
        <TodoCreate todos={todos} />
      </TodoTemplateBlock>
    </>
  ) : (
    <Navigate replace to={'/'} />
  )
}

export default Todo
