import React, { useRef, useState } from 'react'
import * as S from '../../styles/Todo.style'
import { MdDone, MdDelete, MdEdit } from 'react-icons/md'
// import { deleteTodo, updateTodo } from '../utils/todo'

function TodoItem({ todoData }) {
  const { todo, isCompleted } = todoData
  const [editMode, setEditMode] = useState(false)
  const inputRef = useRef()

  // 수정 버튼 클릭시 수정모드 활성화
  const onClickEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <S.TodoItemBlock>
      <S.CheckCircle isCompleted={isCompleted}>{isCompleted && <MdDone />}</S.CheckCircle>
      <S.Text isCompleted={isCompleted}>
        {editMode ? (
          <S.EditInput ref={inputRef} defaultValue={todo} placeholder="수정할 내용을 적어주세요!" />
        ) : (
          todo
        )}
      </S.Text>
      <S.EditBtnBox
        onClick={() => {
          onClickEditMode(todoData)
        }}
      >
        {editMode ? '저장' : <MdEdit />}
      </S.EditBtnBox>
      <S.Remove>
        <MdDelete />
      </S.Remove>
    </S.TodoItemBlock>
  )
}

export default TodoItem
