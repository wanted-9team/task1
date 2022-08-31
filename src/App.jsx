import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Auth from './pages/Auth'
import Todo from './pages/Todo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
