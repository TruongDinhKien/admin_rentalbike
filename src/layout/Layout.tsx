import { useEffect, FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, useMediaQuery } from '@mui/material'
import { Header } from './appbar'
import { Breadcrumbs } from '@/components'
import { useGetIdentity, useRedirect, useSidebarState } from 'react-admin'
import { items, MainDrawer } from './menu'

export const MainLayout: FC<any> = ({ children }) => {
  const theme = useTheme()
  const [open, setOpen] = useSidebarState()
  const { identity } = useGetIdentity()
  const redirect = useRedirect()

  if (identity?.roles) {
    if (!identity?.roles?.includes('admin')) redirect('/product')
  }

  const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'))

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  // set media-wise responsive drawer
  useEffect(() => {
    setOpen(!matchDownLG)
  }, [matchDownLG])

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <MainDrawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          width: '100%',
          marginTop: '75px',
          backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#fafafa',
          flexGrow: 1,
          minHeight: 'calc(100vh - 110px)',
          p: { xs: 2, sm: 3 },
        }}
      >
        <Breadcrumbs navigation={items} title titleBottom card={false} divider={false} />
        {children}
      </Box>
    </Box>
  )
}
