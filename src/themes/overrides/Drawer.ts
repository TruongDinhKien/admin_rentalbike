import { Theme } from '@mui/material'

export default function Drawer(theme: Theme) {
  return {
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          zIndex: 1300,
        },
        paper: {
          backgroundColor: '#fff',
        },
      },
    },
  }
}
