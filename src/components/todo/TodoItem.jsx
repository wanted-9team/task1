import React, { useState } from 'react'
import * as S from '../../styles/Todo.style'
import { MdDone, MdDelete, MdEdit } from 'react-icons/md'
import { deleteTodo, getTodos, updateTodo } from '../../utils/todo'

function TodoItem({ todoData, setTodos }) {
  const { todo, isCompleted } = todoData
  const [editMode, setEditMode] = useState(false)
  const [newContents, setNewContents] = useState('')

  const onChangeNewContents = ({ target }) => {
    setNewContents(target.value)
  }

  // api 요청 후 투두리스트 리렌더링을 위한 함수
  const refetchTodos = () => {
    getTodos().then(res => {
      if (res.status === 200) {
        setTodos(res.data)
      }
    })
  }

  // 투두리스트 완료 상태 토글
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

  // 수정 버튼 클릭시 수정모드 활성화
  const onClickEditMode = () => {
    setEditMode(prev => !prev)
  }

  // 투두리스트 내용 수정
  const onClickEditTodo = todo => {
    const id = todo.id
    updateTodo({
      todo: newContents || todo.todo,
      isCompleted: todo.isCompleted,
      id: id,
    }).then(res => {
      if (res.status === 200) {
        setEditMode(prev => !prev)
        refetchTodos()
      }
    })
  }

  // 투두리스트 삭제
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

      {/* 수정 모드가 아닐 때 */}
      {!editMode && (
        <>
          <S.Text isCompleted={isCompleted}>{todo}</S.Text>
          <S.EditBtnBox onClick={onClickEditMode}>
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

      {/* 수정 모드일 때 */}
      {editMode && (
        <>
          <S.Text isCompleted={isCompleted}>
            <S.EditInput
              defaultValue={todo}
              onChange={onChangeNewContents}
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
          <S.Remove onClick={onClickEditMode}>취소</S.Remove>
        </>
      )}
    </S.TodoItemBlock>
  )
}

export default TodoItem
