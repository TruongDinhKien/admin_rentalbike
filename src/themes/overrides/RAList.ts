import { Theme } from '@mui/material'

export default function RAList(theme: Theme) {
  return {
    RaList: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          border: `1px solid ${theme.palette.divider}`,
        },
      },
    },
    RaListToolbar: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up('xs')]: {
            padding: 16,
          },
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          '& .RaDatagrid-expandIcon': {
            padding: 16,
            fontSize: 24,
          },
        },
      },
    },
    RaSimpleFormIterator: {
      styleOverrides: {
        root: {
          '& .RaSimpleFormIterator-line': {
            marginBottom: 16,
          },
        },
      },
    },
  }
}
