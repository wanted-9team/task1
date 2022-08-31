import React, { useState } from 'react'
import SignUp from '../components/signUp/SignUp'
import SignIn from '../components/signIn/SignIn'
import { Navigate } from 'react-router-dom'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  if (localStorage.getItem('accessToken')) {
    return <Navigate replace to={'/todo'} />
  }
  return isLogin ? <SignIn setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />
}
export default Auth
