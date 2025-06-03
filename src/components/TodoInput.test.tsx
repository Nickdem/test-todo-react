import { render, screen, fireEvent } from '@testing-library/react'
import { TodoInput } from './TodoInput'

test('adds task on button click', () => {
  let value = ''
  const setValue = (newValue: string) => {
    value = newValue
  }
  const handleAdd = jest.fn()

  render(<TodoInput value={value} onChange={setValue} onAdd={handleAdd} />)
  const input = screen.getByPlaceholderText(/Add a task/i)

  fireEvent.change(input, { target: { value: 'Test task' } })
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
  fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' })
  expect(handleAdd).toHaveBeenCalled()
})
