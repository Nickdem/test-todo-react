import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  test('adds a new todo item', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Add a task')
    fireEvent.change(input, { target: { value: 'New task' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(screen.getByText('New task')).toBeInTheDocument()
  })

  test('toggles todo completion', () => {
    render(<App />)
    const checkbox = screen.getByTestId('todo-checkbox-1')
    fireEvent.click(checkbox)
    const checkbox1 = screen.getByTestId('todo-checkbox-2')
    fireEvent.click(checkbox1)
    const checkbox2 = screen.getByTestId('todo-checkbox-3')
    fireEvent.click(checkbox2)
    const taskText = screen.getByTestId('todo-title-1')
    const taskText1 = screen.getByTestId('todo-title-2')
    const taskText2 = screen.getByTestId('todo-title-3')
    expect(taskText).toHaveStyle('text-decoration: line-through')
    expect(taskText1).toHaveStyle('text-decoration: none')
    expect(taskText2).toHaveStyle('text-decoration: line-through')
  })

  test('deletes a todo item', () => {
    render(<App />)
    const deleteButtons = screen.getAllByLabelText('delete')
    fireEvent.click(deleteButtons[0])
    expect(screen.queryByText('Тестовая')).not.toBeInTheDocument()
  })

  test('filters todos', () => {
    render(<App />)
    const filterButtons = screen.getAllByRole('button')
    const activeButton = filterButtons.find((btn) => btn.textContent === 'Active')
    fireEvent.click(activeButton!)
    expect(screen.queryByText('Тестовая')).not.toBeInTheDocument()
    expect(screen.getByText('Написание кода')).toBeInTheDocument()
  })

  test('clear completed todos', () => {
    render(<App />)
    const clearButton = screen.getByText('Clear completed')
    fireEvent.click(clearButton)
    expect(screen.queryByText('Тестовая')).not.toBeInTheDocument()
    expect(screen.queryByText('Тесты')).not.toBeInTheDocument()
  })

  test('toggler theme mode', () => {
    render(<App />)
    const themeSwitch = screen.getByTestId('switcherTheme')

    fireEvent.click(themeSwitch)
    expect(themeSwitch).not.toBeChecked()
  })
})
