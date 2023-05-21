import { Theme } from '@mui/material'

export default function FileInput(theme: Theme) {
  return {
    RaFileInputPreview: {
      styleOverrides: {
        root: {
          '.RaFileInputPreview-removeButton': {
            zIndex: 100,
          },
        },
      },
    },
  }
}
