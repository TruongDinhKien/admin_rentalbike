import { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import { Stack } from '@mui/material'
import { Logo } from '@/components'

// material-ui
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

type DrawerHeaderProps = {
  open?: boolean
  theme?: any
}

const DrawerHeaderStyled: any = styled(Box, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }: any) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  paddingLeft: theme.spacing(open ? 3 : 0),
  paddingRight: theme.spacing(open ? 3 : 0),
}))

export const DrawerHeader: FC<DrawerHeaderProps> = ({ open }) => {
  const theme = useTheme()

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
      </Stack>
    </DrawerHeaderStyled>
  )
}
