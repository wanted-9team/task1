import styled, { css } from 'styled-components'

export const AuthContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: azure;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`

export const AuthTitle = styled.h1`
  margin: 0 0 30px;
  padding: 0;
  text-align: center;
`

export const AuthForm = styled.form``

export const AuthFieldSet = styled.fieldset`
  position: relative;
  border: none;
`

export const AuthLabel = styled.label``

export const AuthInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  margin-bottom: 30px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`

export const AuthMessage = styled.div`
  position: absolute;
  bottom: -1px;
  letter-spacing: -1px;
  line-height: 24px;
  color: ${({ isValid }) => (isValid ? 'green' : '#ff2727')};
`

export const AuthButton = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  transition: all 0.3s;
  ${({ disabled }) => {
    if (disabled) {
      return css`
        background-color: grey;
      `
    } else {
      return css`
        background-color: blue;
        &:hover {
          background: #03e9f4;
          color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
        }
      `
    }
  }};
`

export const AuthFormMessage = styled.p`
  text-align: center;
`

export const AuthToggle = styled.span`
  text-align: center;
  color: blueviolet;
  cursor: pointer;
`
