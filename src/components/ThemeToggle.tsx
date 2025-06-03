import React from 'react'
import { FormControlLabel, Switch } from '@mui/material'
import { ThemeToggleProps } from '../utils'

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ themeMode, setThemeMode }) => (
  <FormControlLabel
    control={
      <Switch
        checked={themeMode === 'dark'}
        onChange={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
        data-testid="switcherTheme"
      />
    }
    label={themeMode === 'dark' ? 'Dark' : 'Light'}
  />
)
