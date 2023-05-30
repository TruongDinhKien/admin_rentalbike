import { Avatar, ButtonBase, Typography } from '@mui/material'
import { ImageField } from 'react-admin'

export const Logo = () => {
  const logo =
    'https://media.istockphoto.com/id/1345639997/vi/vec-to/thi%E1%BA%BFt-k%E1%BA%BF-logo-vector-%C4%91ua-xe-%C4%91%E1%BA%A1p-m%E1%BA%ABu-thi%E1%BA%BFt-k%E1%BA%BF-logo-c%E1%BB%ADa-h%C3%A0ng-xe-%C4%91%E1%BA%A1p.jpg?s=170667a&w=0&k=20&c=A5jG6T4_w-p4D1SM77GStHgi8hBBwJGTRyxgcRR2_ko='
  return (
    <ButtonBase>
      <Avatar alt="profile user" src={logo} sx={{ width: 52, height: 52, margin: '5px' }} />
      <Typography variant="h2" color="primary">
        Bike Rental
      </Typography>
    </ButtonBase>
  )
}
