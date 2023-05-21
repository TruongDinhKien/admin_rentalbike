import { Theme } from '@mui/material'

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          boxShadow: 'none',
          borderRadius: 0,
        },
        paper: {
          backgroundColor: theme.palette.common.white,
        },
      },
    },
  }
}
