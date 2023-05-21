import { Theme } from '@mui/material'
import _ from 'lodash'

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          border: `1px solid ${theme.palette.divider}`,
        },
        tag: {
          background: _.get(theme, 'palette.primary.lighter'),
          border: `1px solid ${_.get(theme, 'palette.primary.200')}`,
        },
      },
    },
  }
}
