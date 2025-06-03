import { render, screen, fireEvent } from '@testing-library/react'
import { FilterButtons } from './FilterButtons'
import { Filter } from '../utils'

test('change filters', () => {
  let filter: Filter = 'all'
  const setFilter = (f: Filter) => {
    filter = f
  }

  render(<FilterButtons filter={filter} setFilter={setFilter} />)
  fireEvent.click(screen.getByText(/Active/i))
  expect(filter).toBe('active')
})
