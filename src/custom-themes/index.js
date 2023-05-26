import { createTheme } from '@mui/material/styles'

// assets
import colors from '../assets/scss/_themes-vars.module.scss'

// project imports
import componentStyleOverrides from './compStyleOverride'
import themePalette from './palette'
import themeTypography from './typography'

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */
const color = colors

export const theme = themeOption => {
  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px',
        },
      },
    },
    typography: themeTypography(themeOption),
  }

  const themes = createTheme(themeOptions)
  themes.components = componentStyleOverrides(themeOption)

  return themes
}

export const darkTheme = theme({
  colors: color,
  heading: color.grey500,
  paper: color.paper,
  backgroundDefault: color.paper,
  background: color.primaryLight,
  darkTextPrimary: color.grey500,
  darkTextSecondary: color.grey500,
  textDark: color.grey500,
  menuSelected: color.secondaryDark,
  menuSelectedBack: color.secondaryLight,
  divider: color.grey200,
})


export const lightTheme = theme({
   colors: color,
  heading: color.grey900,
  paper: color.paper,
  backgroundDefault: color.paper,
  background: color.primaryLight,
  darkTextPrimary: color.grey700,
  darkTextSecondary: color.grey500,
  textDark: color.grey900,
  menuSelected: color.secondaryDark,
  menuSelectedBack: color.secondaryLight,
  divider: color.grey200,
})