import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Auth from './pages/Auth'
import Todo from './pages/Todo'

import { getToken } from './utils/auth'
function App() {
  const accessToken = getToken()

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={accessToken ? <Navigate to="/todo" replace /> : <Auth />} />
        <Route path="/todo" element={!accessToken ? <Navigate to="/" replace /> : <Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
