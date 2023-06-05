import { useTranslate } from 'react-admin'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { dataProvider } from '@/provider'
import _ from 'lodash'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

import { AppWidgetSummary } from '@/components/AppWidgetSummary'

export const Dashboard = () => {
  const [value, setValue] = useState<any>()
  const translate = useTranslate()

  const fetchDashboard = async () => {
    try {
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
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title={translate('resources.dashboard.totalRevenue')}
          total={value?.totalRevenue + ' VND'}
          color="info"
          icon={AttachMoneyIcon}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title={translate('resources.dashboard.totalTax')}
          total={value?.totalTax + ' VND'}
          color="error"
          icon={MoneyOffIcon}
          
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title={translate('resources.dashboard.totalEarnings')}
          total={value?.totalEarnings + ' VND'}
          color="warning"
          icon={PointOfSaleIcon}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title={translate('resources.dashboard.totalRentalBike')}
          total={value?.totalRentalBike + ' ' + translate('resources.dashboard.bike')}
          icon={DirectionsBikeIcon}
        />
      </Grid>
    </Grid>
  )
}
