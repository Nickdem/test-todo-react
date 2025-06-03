import React, { useState } from 'react'
import {
  Container,
  CssBaseline,
  Box,
  Grid,
  createTheme,
  ThemeProvider,
  PaletteMode,
  Typography,
  Button,
  ListItem,
  ListItemText,
} from '@mui/material'
import { useTodos } from './hooks/useTodos'
import { ThemeToggle } from './components/ThemeToggle'
import { TodoInput } from './components/TodoInput'
import { TodoItem } from './components/TodoItem'
import { FilterButtons } from './components/FilterButtons'
import { Stats } from './components/Stats'

const App: React.FC = () => {
  const {
    newTodo,
    setNewTodo,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilterHandler,
    filteredTodos,
    filter,
    deleteCompletedTodos,
    activeCount,
    completedCount,
  } = useTodos()

  const [themeMode, setThemeMode] = useState<PaletteMode>('dark')

  const theme = React.useMemo(() => createTheme({ palette: { mode: themeMode } }), [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid size={8}>
            <Typography variant="h4">Todos</Typography>
          </Grid>
          <Grid size={4} display="flex" justifyContent="flex-end">
            <ThemeToggle themeMode={themeMode} setThemeMode={setThemeMode} />
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            border: 1,
            borderColor: 'primary.main',
            borderRadius: 1,
            p: 2,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TodoInput
            value={newTodo}
            onChange={setNewTodo}
            onAdd={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter' && newTodo.trim()) {
                addTodo(newTodo)
                setNewTodo('')
              }
            }}
          />

          <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
            {filteredTodos.length ? (
              filteredTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                  onToggle={() => toggleTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                />
              ))
            ) : (
              <ListItem sx={{ p: 2, textAlign: 'center' }}>
                <ListItemText primary="Empty" />
              </ListItem>
            )}
          </Box>

          <FilterButtons filter={filter} setFilter={setFilterHandler} />
          <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
            <Grid size={7}>
              <Stats activeCount={activeCount} completedCount={completedCount} />
            </Grid>
            <Grid size={5} display="flex" justifyContent="flex-end">
              <Button
                color="warning"
                onClick={deleteCompletedTodos}
                disabled={completedCount === 0}
              >
                Clear completed
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default React.memo(App)
