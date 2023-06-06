import { TBike } from '@/types'
import { Box, Card, Link, Typography, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC } from 'react'
import Button from '@mui/material/Button'
import { dataProvider } from '@/provider'
import { useGetIdentity, useNotify } from 'react-admin'
const StyledBikeImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

export const ShopBikeCard: FC<TBike> = props => {
  const { id, name, quantity = 0, description, imgUrl, price, onUpdate } = props
  const notify = useNotify()
  const { identity } = useGetIdentity()

  const handleBuy = async (status = 'waiting') => {
    const startTime = new Date()
    const endTime = new Date(startTime.getTime() + 3 * 60 * 60 * 1000)

    const formattedStartTime = startTime.toISOString()
    const formattedEndTime = endTime.toISOString()
    try {
      const res = await dataProvider('REMOTE', `rentals`, {
        requestMethod: 'POST',
        data: {
          userId: identity?.id,
          bikeId: id,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
          status,
        },
      })

      if (res) {
        notify(status === 'waiting' ? 'Đặt trước thành công' : 'Thanh toán thành công')
        onUpdate()
      }
    } catch (err) {
      notify('Xin lỗi, xe này hiện tại đang không còn. Xin vui lòng thử lại sau!')
      return err
    }
  }

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative', fontSize: 10 }}>
        {id && (
          <Card
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
              backgroundColor: quantity > 10 ? '#0000FF' : '#FF0000',
              color: quantity > 10 ? '#fff' : '#000',
              padding: '4px',
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
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Button variant="outlined" onClick={() => handleBuy('renting')}>
            Thanh toán
          </Button>
          <Button variant="outlined" onClick={() => handleBuy()}>
            Đặt trước
          </Button>
        </Stack>
      </Stack>
    </Card>
  )
}
