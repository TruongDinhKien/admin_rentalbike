import { FC, Fragment } from 'react'
import { DRAWER_WIDTH } from '@/constants'
import { useTheme } from '@mui/material/styles'
import { AppBar, IconButton, Toolbar, useMediaQuery, styled } from '@mui/material'
import { HeaderContent } from './HeaderContent'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ListIcon from '@mui/icons-material/List'
import { LocalesMenuButton } from 'react-admin'

const AppBarStyled: any = styled(AppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }: { theme: any; open: boolean }): any => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

type HeaderProps = {
  open: boolean
  handleDrawerToggle: () => void
  iconBackColor?: string
  iconBackColorOpen?: string
}

const MainHeader: FC<HeaderProps> = ({ open, handleDrawerToggle}) => {
  return (
    <Toolbar >
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        sx={{
          color: 'text.primary',
          ml: { xs: 0, lg: -2 },
        }}
      >
        {!open ? <ListIcon /> : <ArrowBackIosIcon />}
      </IconButton>
      <HeaderContent />
    </Toolbar>
  )
}

export const Header: FC<HeaderProps> = ({ open, handleDrawerToggle }) => {
  const theme = useTheme()
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'))
  // app-bar params
  const appBar: any = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      // boxShadow: theme.customShadows.z1
    },
  }

  return (
    <Fragment>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          <MainHeader
            open={open}
            handleDrawerToggle={handleDrawerToggle}
          />
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>
          <MainHeader
            open={open}
            handleDrawerToggle={handleDrawerToggle}
          />
        </AppBar>
      )}
    </Fragment>
  )
}
