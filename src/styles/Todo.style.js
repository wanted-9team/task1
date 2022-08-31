import styled, { css } from 'styled-components'

export const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`

export const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.isCompleted &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`

export const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.isCompleted &&
    css`
      color: #ced4da;
    `}
`

export const EditBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
`

export const EditInput = styled.input`
  height: 28px;
  width: 90%;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  font-size: 18px;
`
