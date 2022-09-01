import AxiosApi from '../api'

const useTodoApi = () => {
  const { todoAxios, tokenAxios } = AxiosApi()

  const createTodo = async data => {
    return await todoAxios.post('/todos', data)
  }

  const getTodos = async () => {
    return await tokenAxios.get('/todos')
  }

  const updateTodo = async data => {
    const { todo, isCompleted, id } = data
    return await todoAxios.put(`/todos/${id}`, { todo, isCompleted })
  }

  const deleteTodo = async id => {
    return await tokenAxios.delete(`/todos/${id}`)
  }

  return { createTodo, getTodos, updateTodo, deleteTodo }
}

export default useTodoApi
