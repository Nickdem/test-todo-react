import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from './ThemeToggle'
import { ThemeMode } from '../utils'

test('theme toggler', () => {
  let mode: ThemeMode = 'light'
  const setMode = (newMode: ThemeMode) => {
    mode = newMode
  }

  render(<ThemeToggle themeMode={mode} setThemeMode={setMode} />)
  const switchEl = screen.getByRole('checkbox')
  fireEvent.click(switchEl)
  expect(mode).toBe('dark')
})
