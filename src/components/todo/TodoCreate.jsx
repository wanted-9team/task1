import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import { CircleButton, InsertFormPositioner, InsertForm, Input } from '../../styles/Todo.style'
import useTodoApi from '../../utils/useTodoApi'

function TodoCreate({ setTodos }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const { createTodo, getTodos } = useTodoApi()

  const refetchTodos = () => {
    getTodos().then(res => {
      if (res.status === 200) {
        setTodos(res.data)
      }
    })
  }

  // Add Todo
  const addTodo = todo => {
    createTodo(todo).then(res => {
      if (res.status === 201) {
        refetchTodos()
      }
    })
  }

  const onToggle = () => setOpen(!open)
  const onChange = e => setValue(e.target.value)
  const onSubmit = e => {
    e.preventDefault()
    addTodo({ todo: value })
    setOpen(false)
    setValue('')
  }
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="할 일을 입력 후, enter를 누르세요"
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default TodoCreate
