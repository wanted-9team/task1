import React, { useState, useMemo, useEffect } from 'react'
import { signUp } from '../../utils/auth'
import * as S from '../../styles/Auth.style'

function SignUp({ setIsLogin }) {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const toastTimer = setTimeout(() => {
      setErrorMessage('')
    }, 4000)
    return () => clearTimeout(toastTimer)
  }, [errorMessage])

  const isEmailValid = useMemo(() => {
    return userInfo.email.includes('@')
  }, [userInfo.email])

  const isPasswordValid = useMemo(() => {
    return userInfo.password.length >= 8
  }, [userInfo.password])

  const isPasswordConfirmValid = useMemo(() => {
    return passwordConfirm === userInfo.password
  }, [passwordConfirm, userInfo.password])

  const onSubmit = async e => {
    e.preventDefault()
    const data = JSON.stringify(userInfo)
    signUp(data)
      .then(res => {
        if (res.status === 201) {
          setIsLogin(true)
        }
      })
      .catch(res => {
        if (res.response.status === 400) {
          setErrorMessage('이미 사용자가 있습니다. 다른 정보를 입력해주세요')
        }
      })
  }

  const onChangeEmail = ({ target }) => {
    setUserInfo(prev => ({ ...prev, email: target.value }))
  }

  const onChangePassword = ({ target }) => {
    setUserInfo(prev => ({ ...prev, password: target.value }))
  }

  const onChangePasswordConfirm = ({ target }) => {
    setPasswordConfirm(target.value)
  }

  return (
    <>
      <S.ToastBox errorMessage={errorMessage}>{errorMessage}</S.ToastBox>
      <S.AuthContainer>
        <S.AuthTitle>회원가입</S.AuthTitle>
        <S.AuthForm onSubmit={onSubmit}>
          <S.AuthFieldSet>
            <S.AuthLabel htmlFor="email">이메일</S.AuthLabel>
            <S.AuthInput type="text" name="email" onChange={onChangeEmail} />
            {userInfo.email.length > 0 && (
              <S.AuthMessage isValid={isEmailValid}>
                {isEmailValid
                  ? '올바른 이메일 형식이에요'
                  : '이메일 형식이 틀렸어요! 다시 확인해주세요ㅠ'}
              </S.AuthMessage>
            )}
          </S.AuthFieldSet>
          <S.AuthFieldSet>
            <S.AuthLabel htmlFor="password">비밀번호</S.AuthLabel>
            <S.AuthInput type="password" name="password" onChange={onChangePassword} />
            {userInfo.password.length > 0 && (
              <S.AuthMessage isValid={isPasswordValid}>
                {isPasswordValid ? '안전한 비밀번호에요' : '비밀번호를 8자 이상 입력해주세요!'}
              </S.AuthMessage>
            )}
          </S.AuthFieldSet>
          <S.AuthFieldSet>
            <S.AuthLabel htmlFor="passwordConfirm">비밀번호 확인</S.AuthLabel>
            <S.AuthInput
              type="password"
              name="passwordConfirm"
              onChange={onChangePasswordConfirm}
            />
            {passwordConfirm.length > 0 && (
              <S.AuthMessage isValid={isPasswordConfirmValid}>
                {isPasswordConfirmValid ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다'}
              </S.AuthMessage>
            )}
          </S.AuthFieldSet>
          <S.AuthButton
            type="submit"
            disabled={!(isEmailValid && isPasswordValid && isPasswordConfirmValid)}
          >
            회원가입
          </S.AuthButton>
        </S.AuthForm>
        <S.AuthFormMessage>
          이미 가입하셨나요? <S.AuthToggle onClick={() => setIsLogin(true)}>로그인</S.AuthToggle>
        </S.AuthFormMessage>
      </S.AuthContainer>
    </>
  )
}

export default SignUp
