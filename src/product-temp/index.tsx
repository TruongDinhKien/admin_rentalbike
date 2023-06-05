import { FC, useEffect, useState } from 'react'
import { Container, Grid, Stack, Typography } from '@mui/material'
import { ShopBikeCard } from '@/components/ShopBikeCard'
import { TBike } from '@/types'
import { dataProvider } from '@/provider'
import _ from 'lodash'

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [bikes, setBikes] = useState<TBike[]>([])
  const fetchBikes = async () => {
    try {
      const res = await dataProvider('REMOTE', `bikes`, {
        requestMethod: 'GET',
      })
      const newData = _.get(res, 'data')

      setBikes(newData)
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchBikes()
  }, [])
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 5 }}>
        Products
      </Typography>

      <BikeList bikes={bikes} />
    </Container>
  )
}

const BikeList: FC<{ bikes?: TBike[] }> = ({ bikes, ...other }) => {
  return (
    <Grid container spacing={3} {...other}>
      {bikes?.map((bike, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <ShopBikeCard {...bike} />
        </Grid>
      ))}
    </Grid>
  )
}
