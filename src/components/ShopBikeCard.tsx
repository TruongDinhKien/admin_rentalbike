import { TBike } from '@/types'
import { Box, Card, Link, Typography, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC } from 'react'
import Button from '@mui/material/Button';
const StyledBikeImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

export const ShopBikeCard: FC<TBike> = props => {
  const { id, name, quantity=0, description, imgUrl, price } = props

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative', fontSize: 10,  }}>
        {id && (
          <Card
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
              backgroundColor:  quantity > 10 ? '#0000FF' : '#FF0000',
              color: quantity > 10 ? '#fff' : '#000',
              padding: '4px'
            }}
          >
            {quantity}
          </Card>
        )}
        <StyledBikeImg alt={name} src={imgUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography
            component="span"
            variant="body1"
            sx={{
              color: 'text.disabled',
            }}
          >
            {price}
            &nbsp; VND
          </Typography>
          <Button variant="outlined">Rent Now</Button>
        </Stack>
      </Stack>
    </Card>
  )
}
