import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { Filter, FilterButtonsProps } from '../utils'

export const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, setFilter }) => (
  <ButtonGroup fullWidth>
    {['all', 'active', 'completed'].map((fltr) => (
      <Button
        key={fltr}
        onClick={() => setFilter(fltr as Filter)}
        color={filter === fltr ? 'secondary' : 'primary'}
      >
        {fltr.charAt(0).toUpperCase() + fltr.slice(1)}
      </Button>
    ))}
  </ButtonGroup>
)
