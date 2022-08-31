import React, { useState } from 'react'
import SignUp from '../components/signUp/SignUp'
import SignIn from '../components/signIn/SignIn'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  return isLogin ? <SignIn setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />
}
export default Auth
