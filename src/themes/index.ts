import Palette from './palette'
import componentsOverride from './overrides'
import { blueGrey, purple } from '@mui/material/colors'
import { createTheme, PaletteMode, ThemeOptions } from '@mui/material'
import Typography from './typography'

const renderTheme = (mode: PaletteMode) => {
  const themeTypography: any = Typography([
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ])

  const theme = Palette(mode, blueGrey, purple)

  const themeOptions: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1536,
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    },
    direction: 'ltr',
    spacing: 4,
    mixins: {
      toolbar: {
        minHeight: 60,
        paddingTop: 8,
        paddingBottom: 8,
      },
    },
    palette: theme.palette,
    typography: themeTypography,
  }

  const themes = createTheme(themeOptions)
  themes.components = componentsOverride(themes)
  console.log('themes', themes)
  return themes
}

export const lightTheme = renderTheme('light')
export const darkTheme = renderTheme('dark')
