import { todoAxios } from '../api'
import { tokenAxios } from '../api'

export const createTodo = async data => {
  return await todoAxios.post('/todos', data)
}

export const getTodos = async () => {
  return await tokenAxios.get('/todos')
}

export const updateTodo = async data => {
  const { todo, isCompleted, id } = data
  return await todoAxios.put(`/todos/${id}`, { todo, isCompleted })
}

export const deleteTodo = async id => {
  return await tokenAxios.delete(`/todos/${id}`)
}
