import { Theme } from '@mui/material'
import _ from 'lodash'

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: _.get(theme, 'palette.secondary.300'),
        },
      },
    },
  }
}
