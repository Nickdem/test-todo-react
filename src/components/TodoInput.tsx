import React from 'react'
import { TextField } from '@mui/material'
import { TodoInputProps } from '../utils'

export const TodoInput: React.FC<TodoInputProps> = ({ value, onChange, onAdd }) => {
  return (
    <TextField
      fullWidth
      placeholder="Add a task"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onAdd}
    />
  )
}
