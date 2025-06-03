import { useState } from 'react'
import { Filter, Todo } from '../utils'

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Тестовая', completed: true },
    { id: 2, title: 'Написание кода', completed: false },
    { id: 3, title: 'Тесты', completed: true },
  ])
  const [filter, setFilter] = useState<Filter>('all')

  const [newTodo, setNewTodo] = useState<string>('')

  const addTodo = (title: string) => {
    if (title.trim() === '') return
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos((prev) => [...prev, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    )
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const setFilterHandler = (filterName: Filter) => {
    setFilter(() => {
      return filterName
    })
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed
    if (filter === 'active') return !todo.completed
    return true
  })

  const deleteCompletedTodos = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
    filteredTodos,
    setFilterHandler,
    filter,
    deleteCompletedTodos,
    activeCount,
    completedCount,
  }
}
