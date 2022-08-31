import React from 'react'
// import TodoItem from './TodoItem'
import styled from 'styled-components'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`

function TodoList({ todos }) {
  return (
    <TodoListBlock>
      {todos?.map(todoData => (
        <p>{todoData.todo}</p>
      ))}
    </TodoListBlock>
  )
}

export default TodoList
