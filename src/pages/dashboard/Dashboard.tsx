import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Title, useRecordContext, useTranslate } from 'react-admin'
import { Box, Grid, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { dataProvider } from '@/provider'
import _ from 'lodash'
import { MainCard } from '@/components'

export const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState<any>()
  const translate = useTranslate()

  const fetchDashboard = async () => {
    try {
      setLoading(true)
      const res = await dataProvider('REMOTE', `statistic`, {
        requestMethod: 'GET',
      })
      const newData = _.get(res, 'data')

      setValue(newData)
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Card sx={{ width: 350, height: 200 }}>
        <h4 style={{ textAlign: 'center' }}>{translate('resources.dashboard.totalRevenue')}</h4>
        <CardContent style={{ textAlign: 'center' }}>{value?.totalRevenue} VND</CardContent>
      </Card>
      <Card sx={{ width: 350, height: 200 }}>
        <h4 style={{ textAlign: 'center' }}>{translate('resources.dashboard.totalTax')}</h4>
        <CardContent style={{ textAlign: 'center' }}>{value?.totalTax} VND</CardContent>
      </Card>
      <Card sx={{ width: 350, height: 200 }}>
        <h4 style={{ textAlign: 'center' }}>{translate('resources.dashboard.totalEarnings')}</h4>
        <CardContent style={{ textAlign: 'center' }}>{value?.totalEarnings} VND</CardContent>
      </Card>
      <Card sx={{ width: 350, height: 200 }}>
        <h4 style={{ textAlign: 'center' }}>{translate('resources.dashboard.totalRentalBike')}</h4>
        <CardContent style={{ textAlign: 'center' }}>
          {value?.totalRentalBike} {translate('resources.dashboard.bike')}
        </CardContent>
      </Card>
    </div>
  )
}
