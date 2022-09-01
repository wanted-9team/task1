import React, { useState } from 'react'
import SignUp from '../components/signUp/SignUp'
import SignIn from '../components/signIn/SignIn'
import { Navigate } from 'react-router-dom'
import { getToken } from '../utils/token'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const Token = getToken()

  if (Token) {
    return <Navigate replace to={'/todo'} />
  }
  return isLogin ? <SignIn setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />
}
export default Auth
