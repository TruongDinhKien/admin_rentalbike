import { Theme } from '@mui/material'

export default function Toolbar(theme: Theme) {
  return {
    RaToolbar: {
      styleOverrides: {
        root: {
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    RaBulkActionsToolbar: {
      styleOverrides: {
        root: {
          '& .RaBulkActionsToolbar-toolbar': {
            paddingTop: 0,
            paddingBottom: 0,
            height: 48,
            minHeight: 48,
            transform: 'translateY(-48px)',
          },
          '& .RaBulkActionsToolbar-collapsed': {
            paddingTop: 0,
            paddingBottom: 0,
            height: 0,
            minHeight: 0,
            transform: 'translateY(0px)',
            overflowY: 'hidden',
          },
        },
      },
    },
  }
}
