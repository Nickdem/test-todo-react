export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type Filter = 'all' | 'completed' | 'active'
export type ThemeMode = 'light' | 'dark'

export interface ThemeToggleProps {
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
}

export interface TodoInputProps {
  value: string
  onChange: (value: string) => void
  onAdd: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
export interface TodoItemProps extends Todo {
  onToggle: () => void
  onDelete: () => void
}
export interface FilterButtonsProps {
  filter: Filter
  setFilter: (filter: 'all' | 'active' | 'completed') => void
}

export interface StatsProps {
  activeCount: number
  completedCount: number
}
