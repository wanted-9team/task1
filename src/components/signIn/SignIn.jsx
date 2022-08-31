import React, { useCallback, useState, useEffect } from 'react'
import { setToken } from '../../utils/token'
import { signIn } from '../../utils/auth'
import * as S from '../../styles/Auth.style'
import { useNavigate } from 'react-router'

function SignIn({ setIsLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')

  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)

  const [isError, setIsError] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError('')
      }, 4000)
    }
  }, [isError])

  const onSubmit = async e => {
    e.preventDefault()
    const data = JSON.stringify({ email: email, password: password })

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
          setIsError('해당 사용자가 존재하지 않습니다')
        } else if (res.response.status === 401) {
          setIsError('비밀번호가 일치하지 않습니다')
        }
      })
  }

  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
    if (!e.target.value.includes('@')) {
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요ㅠ')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식이에요')
      setIsEmail(true)
    }
  }, [])

  const onChangePassword = useCallback(e => {
    setPassword(e.target.value)
    if (e.target.value.length < 8) {
      setIsPassword(false)
      setPasswordMessage('비밀번호를 8자 이상 입력해주세요!')
    } else {
      setIsPassword(true)
      setPasswordMessage('안전한 비밀번호에요')
    }
  }, [])

  return (
    <S.AuthContainer>
      <S.ToastBox isError={isError}>{isError}</S.ToastBox>
      <S.AuthTitle>로그인</S.AuthTitle>
      <S.AuthForm onSubmit={onSubmit}>
        <S.AuthFieldSet>
          <S.AuthLabel htmlFor="email">이메일</S.AuthLabel>
          <S.AuthInput id="email" type="email" name="email" onChange={onChangeEmail} />
          {email.length > 0 && (
            <S.AuthMessage className={`message ${isEmail ? 'success' : 'fail'}`}>
              {emailMessage}
            </S.AuthMessage>
          )}
        </S.AuthFieldSet>
        <S.AuthFieldSet>
          <S.AuthLabel htmlFor="password">비밀번호</S.AuthLabel>
          <S.AuthInput id="password" type="password" name="password" onChange={onChangePassword} />
          {password.length > 0 && (
            <S.AuthMessage className={`message ${isPassword ? 'success' : 'fail'}`}>
              {passwordMessage}
            </S.AuthMessage>
          )}
        </S.AuthFieldSet>
        <S.AuthButton type="submit" disabled={!isEmail || !isPassword}>
          로그인
        </S.AuthButton>
      </S.AuthForm>
      <S.AuthFormMessage>
        계정이 아직 없으신가요?
        <S.AuthToggle onClick={() => setIsLogin(false)}>회원가입</S.AuthToggle>
      </S.AuthFormMessage>
    </S.AuthContainer>
  )
}

export default SignIn
