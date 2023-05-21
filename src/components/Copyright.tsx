import React from 'react'
import { Typography, Link } from '@mui/material'

type CopyrightProps = {
  sx: Record<string, any>
}

export const Copyright = (props: CopyrightProps) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'© '}
      <Link color="inherit" href="">
        Internship
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
