import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Auth from './pages/Auth'
import Todo from './pages/Todo'
import GlobalStyle from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
