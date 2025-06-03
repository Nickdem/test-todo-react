import React from 'react'
import { Chip } from '@mui/material'
import { StatsProps } from '../utils'

export const Stats: React.FC<StatsProps> = ({ activeCount, completedCount }) => (
  <>
    <Chip label={`Active: ${activeCount}`} disabled />
    <Chip label={`Completed: ${completedCount}`} disabled sx={{ ml: 1 }} />
  </>
)
