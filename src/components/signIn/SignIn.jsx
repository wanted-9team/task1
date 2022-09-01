import React, { useState, useEffect, useMemo } from 'react'
import { setToken } from '../../utils/token'
import useAuthApi from '../../utils/useAuthApi'
import * as S from '../../styles/Auth.style'
import { useNavigate } from 'react-router'

function SignIn({ setIsLogin }) {
  const [loginUserInfo, setLoginUserInfo] = useState({ email: '', password: '' })

  const { signIn } = useAuthApi()

  const isEmailValid = useMemo(() => {
    return loginUserInfo.email.includes('@')
  }, [loginUserInfo.email])

  const isPasswordValid = useMemo(() => {
    return loginUserInfo.password.length >= 8
  }, [loginUserInfo.password])

  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const toastTimer = setTimeout(() => {
      setErrorMessage('')
    }, 4000)
    return () => clearTimeout(toastTimer)
  }, [errorMessage])

  const onSubmit = async e => {
    e.preventDefault()
    const data = JSON.stringify(loginUserInfo)
    signIn(data)
      .then(res => {
        if (res.status === 200) {
          const accessToken = res.data.access_token
          setToken(JSON.stringify(accessToken))
          navigate('/todo')
        }
      })
      .catch(res => {
        if (res.response.status === 404) {
          setErrorMessage('해당 사용자가 존재하지 않습니다')
        } else if (res.response.status === 401) {
          setErrorMessage('비밀번호가 일치하지 않습니다')
        }
      })
  }

  const onChangeEmail = ({ target }) => {
    setLoginUserInfo(prev => ({ ...prev, email: target.value }))
  }

  const onChangePassword = ({ target }) => {
    setLoginUserInfo(prev => ({ ...prev, password: target.value }))
  }

  return (
    <>
      <S.ToastBox errorMessage={errorMessage}>{errorMessage}</S.ToastBox>
      <S.AuthContainer>
        <S.AuthTitle>로그인</S.AuthTitle>
        <S.AuthForm onSubmit={onSubmit}>
          <S.AuthFieldSet>
            <S.AuthLabel htmlFor="email">이메일</S.AuthLabel>
            <S.AuthInput type="email" name="email" onChange={onChangeEmail} />
            {loginUserInfo.email.length > 0 && (
              <S.AuthMessage isValid={isEmailValid}>
                {isEmailValid
                  ? '올바른 이메일 형식이에요'
                  : '이메일 형식이 틀렸어요! 다시 확인해주세요ㅠ'}
              </S.AuthMessage>
            )}
          </S.AuthFieldSet>
          <S.AuthFieldSet>
            <S.AuthLabel htmlFor="password">비밀번호</S.AuthLabel>
            <S.AuthInput
              id="password"
              type="password"
              name="password"
              onChange={onChangePassword}
            />
            {loginUserInfo.password.length > 0 && (
              <S.AuthMessage isValid={isPasswordValid}>
                {isPasswordValid ? '안전한 비밀번호에요' : '비밀번호를 8자 이상 입력해주세요!'}
              </S.AuthMessage>
            )}
          </S.AuthFieldSet>
          <S.AuthButton type="submit" disabled={!(isEmailValid && isPasswordValid)}>
            로그인
          </S.AuthButton>
        </S.AuthForm>
        <S.AuthFormMessage>
          계정이 아직 없으신가요?
          <S.AuthToggle onClick={() => setIsLogin(false)}>회원가입</S.AuthToggle>
        </S.AuthFormMessage>
      </S.AuthContainer>
    </>
  )
}

export default SignIn
