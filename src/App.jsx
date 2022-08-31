import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Auth from './pages/Auth'
import Todo from './pages/Todo'
import GlobalStyle from './styles/global'
import { getToken } from './utils/token'

function App() {
  const token = getToken()
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" index element={token ? <Navigate replace to="/todo" /> : <Auth />} />
        <Route path="/todo" element={token ? <Todo /> : <Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
