import React from 'react'
import * as S from '../../styles/Todo.style'
import { MdDone, MdDelete, MdEdit } from 'react-icons/md'
import { useRef } from 'react'
import useTodoApi from '../../utils/useTodoApi'

function TodoItem({ todoData, setTodos, setErrorMessage, editModeId, setEditModeId }) {
  const { todo, id, isCompleted } = todoData
  const inputRef = useRef()
  const { getTodos, updateTodo, deleteTodo } = useTodoApi()

  const refetchTodos = () => {
    getTodos().then(res => {
      if (res.status === 200) {
        setTodos(res.data)
      }
    })
  }

  const onClickToggleTodo = todo => {
    todo.isCompleted = !todo.isCompleted
    updateTodo({
      todo: todo.todo,
      isCompleted: todo.isCompleted,
      id: todo.id,
    }).then(res => {
      if (res.status === 200) {
        refetchTodos()
      }
    })
  }

  const onClickEditMode = id => {
    setEditModeId(id)
  }

  const onClickEditTodo = todo => {
    const id = todo.id
    const editValue = inputRef.current.value

    if (!editValue) {
      setErrorMessage('수정할 값을 입력해주세요.')
      return
    }

    todo.todo = editValue
    updateTodo({
      todo: editValue,
      isCompleted: todo.isCompleted,
      id: id,
    }).then(res => {
      if (res.status === 200) {
        setEditModeId('')
        refetchTodos()
      }
    })
  }

  const onClickDeleteTodo = todo => {
    const id = todo.id
    deleteTodo(id).then(res => {
      if (res.status === 204) {
        refetchTodos()
      }
    })
  }

  return (
    <S.TodoItemBlock>
      <S.CheckCircle
        isCompleted={isCompleted}
        onClick={() => {
          onClickToggleTodo(todoData)
        }}
      >
        {isCompleted && <MdDone />}
      </S.CheckCircle>
      {editModeId === id ? (
        <>
          <S.Text isCompleted={isCompleted}>
            <S.EditInput
              defaultValue={todo}
              ref={inputRef}
              placeholder="수정할 내용을 적어주세요!"
            />
          </S.Text>
          <S.EditBtnBox
            onClick={() => {
              onClickEditTodo(todoData)
            }}
          >
            저장
          </S.EditBtnBox>
          <S.Remove onClick={() => onClickEditMode('')}>취소</S.Remove>
        </>
      ) : (
        <>
          <S.Text isCompleted={isCompleted}>{todo}</S.Text>
          <S.EditBtnBox onClick={() => onClickEditMode(id)}>
            <MdEdit />
          </S.EditBtnBox>
          <S.Remove
            onClick={() => {
              onClickDeleteTodo(todoData)
            }}
          >
            <MdDelete />
          </S.Remove>
        </>
      )}
    </S.TodoItemBlock>
  )
}

export default TodoItem
