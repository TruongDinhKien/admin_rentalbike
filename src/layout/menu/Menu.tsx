import { useMemo, FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Drawer, useMediaQuery } from '@mui/material'
import { DrawerHeader } from './DrawerHeader'
import { DrawerContent } from './DrawerContent'
import { DRAWER_WIDTH } from '@/constants'
import { styled } from '@mui/material/styles'

const openedMixin = (theme: any) => ({
  width: DRAWER_WIDTH,
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  boxShadow: 'none',
})

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 0,
  borderRight: 'none',
  //boxShadow: theme.customShadows.z1
})

// ==============================|| DRAWER - MINI STYLED ||============================== //

const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }): any => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

type MainDrawerProps = {
  open?: boolean
  handleDrawerToggle?: () => void
  window?: any
}

export const MainDrawer: FC<MainDrawerProps> = ({ open, handleDrawerToggle, window }) => {
  const theme = useTheme()
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'))

  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined

  // header content
  const drawerContent = useMemo(() => <DrawerContent />, [])
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open])

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
      {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={open}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit',
            },
          }}
        >
          {open && drawerHeader}
          {open && drawerContent}
        </Drawer>
      )}
    </Box>
  )
}
