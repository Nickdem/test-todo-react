import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from './TodoItem'

test('change and deletes task', () => {
  const toggle = jest.fn()
  const deleteFn = jest.fn()

  render(<TodoItem id={1} title="Test 1" completed={false} onToggle={toggle} onDelete={deleteFn} />)

  fireEvent.click(screen.getByRole('checkbox'))
  expect(toggle).toHaveBeenCalled()

  fireEvent.click(screen.getByLabelText(/delete/i))
  expect(deleteFn).toHaveBeenCalled()
})
