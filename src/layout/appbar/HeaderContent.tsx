import { Box, Button, IconButton, Link, Typography, useMediaQuery } from '@mui/material'
import RedeemIcon from '@mui/icons-material/Redeem'
import { Search } from './Search'
import { Profile } from './Profile'
import { Notification } from './Notification'
import { MobileSection } from './MobileSection'
import { LocalesMenuButton, SelectField, useLocaleState, useSetLocale } from 'react-admin'
import { match } from 'assert'

// ==============================|| HEADER - CONTENT ||============================== //

export const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      {/* <IconButton
        component={Link}
        href="https://github.com/codedthemes/mantis-free-react-admin-template"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <RedeemIcon />
      </IconButton> */}
      <LocalesMenuButton
        languages={[
          { locale: 'en', name: '🇬🇧' },
          { locale: 'vi', name: '🇻🇳' },
        ]}
      />
      {/* <Notification /> */}
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  )
}
