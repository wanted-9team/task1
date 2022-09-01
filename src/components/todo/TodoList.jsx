import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { TodoListBlock } from '../../styles/Todo.style'

function TodoList({ todos, setTodos, setErrorMessage }) {
  const [editModeId, setEditModeId] = useState('')
  return (
    <TodoListBlock>
      {todos?.map(todoData => (
        <TodoItem
          key={todoData.id}
          todoData={todoData}
          setTodos={setTodos}
          setErrorMessage={setErrorMessage}
          editModeId={editModeId}
          setEditModeId={setEditModeId}
        />
      ))}
    </TodoListBlock>
  )
}

export default TodoList
