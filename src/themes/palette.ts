import { createTheme } from '@mui/material/styles'
import { Color, PaletteMode } from '@mui/material'
import ThemeOption from './theme'

const Palette = (mode: PaletteMode, primaryColor: Color, secondaryColor: Color) => {
  const paletteColor = ThemeOption(primaryColor, secondaryColor)

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff',
      },
      ...paletteColor,
      text: {
        primary: paletteColor.grey[700],
        secondary: paletteColor.grey[500],
        disabled: paletteColor.grey[400],
      },
      action: {
        disabled: paletteColor.grey[400],
      },
      divider: paletteColor.grey[200],
      background: {
        paper: paletteColor.grey[50],
        default: paletteColor.grey.A100,
      },
    },
  })
}

export default Palette
