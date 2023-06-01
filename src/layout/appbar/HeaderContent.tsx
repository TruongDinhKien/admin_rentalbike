import { Box, TypeBackground, createTheme, useMediaQuery } from '@mui/material'
import { Search } from './Search'
import { Profile } from './Profile'
import { MobileSection } from './MobileSection'
import { LocalesMenuButton, ToggleThemeButton, useTheme, useTranslate } from 'react-admin'
import colors from '../../assets/scss/_themes-vars.module.scss'
import { darkTheme, lightTheme } from '@/custom-themes'
import { PaletteOptions } from '@mui/material/styles'
interface CustomPaletteOptions extends PaletteOptions {
  colors: Partial<TypeBackground>
}

const darkThemeCustom = createTheme({
  ...darkTheme,
  palette: {
    mode: 'dark',
    background: {
      default: '#010101', // Default background color
      paper: '#010101', // Background color for paper surfaces
    },
    // Add other properties as needed
  } as CustomPaletteOptions,
})

// ==============================|| HEADER - CONTENT ||============================== //

export const HeaderContent = () => {
  const translate = useTranslate()
  const matchesXs = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  return (
    <>
      {matchesXs ? <Box sx={{ width: '100%', ml: 1 }} /> : <Search />}
      <Box sx={{ whiteSpace: 'nowrap' }}>
        <LocalesMenuButton
          languages={[
            { locale: 'en', name: `🇬🇧 ${translate('menu.en')}` },
            { locale: 'vi', name: `🇻🇳 ${translate('menu.vi')}` },
          ]}
        />
      </Box>
      <ToggleThemeButton darkTheme={darkThemeCustom} lightTheme={lightTheme} />
      {/* <Notification /> */}
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  )
}
