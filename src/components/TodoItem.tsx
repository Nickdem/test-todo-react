import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Checkbox, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { TodoItemProps } from '../utils'

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, onToggle, onDelete }) => (
  <ListItem dense key={id}>
    <ListItemIcon>
      <Checkbox checked={completed} onChange={onToggle} data-testid={'todo-checkbox-' + id} />
    </ListItemIcon>
    <ListItemText
      data-testid={'todo-title-' + id}
      primary={title}
      sx={{ textDecoration: completed ? 'line-through' : 'none', overflowX: 'auto' }}
    />
    <IconButton edge="end" aria-label="delete" onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
)
