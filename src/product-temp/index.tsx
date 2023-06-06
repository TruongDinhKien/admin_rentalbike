import { FC, useEffect, useState } from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { ShopBikeCard } from '@/components/ShopBikeCard'
import { TBike } from '@/types'
import { dataProvider } from '@/provider'
import _ from 'lodash'
import { useGetIdentity, useLogout } from 'react-admin'

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [bikes, setBikes] = useState<TBike[]>([])
  const { identity } = useGetIdentity()
  const logout = useLogout();

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
      <Box display="flex" justifyContent="space-between" sx={{ my: 5 }}>
        <div>Hello: {identity?.fullName}</div>
        <div onClick={logout}>Logout</div>
      </Box>
      <BikeList bikes={bikes} onUpdate={fetchBikes} />
    </Container>
  )
}

const BikeList: FC<{ bikes?: TBike[]; onUpdate: any }> = ({ bikes, onUpdate, ...other }) => {
  return (
    <Grid container spacing={3} {...other}>
      {bikes?.map((bike, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <ShopBikeCard {...bike} onUpdate={onUpdate}/>
        </Grid>
      ))}
    </Grid>
  )
}
