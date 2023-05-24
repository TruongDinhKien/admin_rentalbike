import { Box, createTheme, useMediaQuery } from '@mui/material'
import { Search } from './Search'
import { Profile } from './Profile'
import { MobileSection } from './MobileSection'
import { LocalesMenuButton, ToggleThemeButton, useTranslate } from 'react-admin'
import { lightTheme } from '@/themes'

const color = {
  grey: {
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#a3a3a3',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
  },
  primary: {
    100: '#d0d1d5',
    200: '#a1a4ab',
    300: '#727681',
    400: '#1F2A40',
    500: '#141b2d',
    600: '#101624',
    700: '#0c101b',
    800: '#080b12',
    900: '#040509',
  },
  greenAccent: {
    100: '#dbf5ee',
    200: '#b7ebde',
    300: '#94e2cd',
    400: '#70d8bd',
    500: '#4cceac',
    600: '#3da58a',
    700: '#2e7c67',
    800: '#1e5245',
    900: '#0f2922',
  },
  redAccent: {
    100: '#f8dcdb',
    200: '#f1b9b7',
    300: '#e99592',
    400: '#e2726e',
    500: '#db4f4a',
    600: '#af3f3b',
    700: '#832f2c',
    800: '#58201e',
    900: '#2c100f',
  },
  blueAccent: {
    100: '#e1e2fe',
    200: '#c3c6fd',
    300: '#a4a9fc',
    400: '#868dfb',
    500: '#6870fa',
    600: '#535ac8',
    700: '#3e4396',
    800: '#2a2d64',
    900: '#151632',
  },
}

// ==============================|| HEADER - CONTENT ||============================== //
const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    // palette values for dark mode
    primary: {
      main: color.primary[500],
    },
    secondary: {
      main: color.greenAccent[500],
    },
    // neutral: {
    //   dark: color.grey[700],
    //   main: color.grey[500],
    //   light: color.grey[100],
    // },
    background: {
      default: color.primary[500],
    },
  },
})

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
      <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
      {/* <Notification /> */}
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  )
}
