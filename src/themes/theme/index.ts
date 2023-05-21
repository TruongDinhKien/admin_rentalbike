import { Color } from '@mui/material'
import { red, cyan, green, grey, amber } from '@mui/material/colors'

const Theme = (primaryColor: Color, secondaryColor: Color) => {
  const contrastText = '#fff'

  return {
    primary: {
      lighter: primaryColor[50],
      100: primaryColor[100],
      200: primaryColor[200],
      light: primaryColor[300],
      400: primaryColor[400],
      main: primaryColor[500],
      dark: primaryColor[600],
      700: primaryColor[700],
      darker: primaryColor[800],
      900: primaryColor[900],
      contrastText,
    },
    secondary: {
      lighter: secondaryColor[50],
      100: secondaryColor[100],
      200: secondaryColor[200],
      light: secondaryColor[300],
      400: secondaryColor[400],
      main: secondaryColor[500],
      600: secondaryColor[600],
      dark: secondaryColor[700],
      800: secondaryColor[800],
      darker: secondaryColor[900],
      A100: secondaryColor.A100,
      A200: secondaryColor.A200,
      A400: secondaryColor.A400,
      A700: secondaryColor.A700,
      contrastText,
    },
    error: {
      lighter: red[50],
      light: red[300],
      main: red[500],
      dark: red[600],
      darker: red[800],
      contrastText,
    },
    warning: {
      lighter: amber[50],
      light: amber[300],
      main: amber[500],
      dark: amber[600],
      darker: amber[800],
      contrastText,
    },
    info: {
      lighter: cyan[50],
      light: cyan[300],
      main: cyan[500],
      dark: cyan[600],
      darker: cyan[800],
      contrastText,
    },
    success: {
      lighter: green[50],
      light: green[300],
      main: green[500],
      dark: green[600],
      darker: green[800],
      contrastText,
    },
    grey,
  }
}

export default Theme
