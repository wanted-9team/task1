import React from 'react'
import TodoItem from './TodoItem'
import { TodoListBlock } from '../../styles/Todo.style'

function TodoList({ todos, setTodos }) {
  return (
    <TodoListBlock>
      {todos?.map(todoData => (
        <TodoItem key={todoData.id} todoData={todoData} setTodos={setTodos} />
      ))}
    </TodoListBlock>
  )
}

export default TodoList
