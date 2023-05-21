import { Theme } from '@mui/material'

export default function Tabs() {
  return {
    MuiTabs: {
      styleOverrides: {
        vertical: {
          overflow: 'visible',
        },
      },
    },
  }
}
