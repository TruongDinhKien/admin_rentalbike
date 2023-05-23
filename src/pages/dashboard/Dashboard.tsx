import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Title, useTranslate } from 'react-admin'
import { Box, Grid } from '@mui/material'

export const Dashboard = () => {
  const translate = useTranslate()
  return (
    <Card>
      <Title title="Welcome to the administration" />
      <CardContent>
        <Box>
          <Grid style={{ textAlign: 'center', color: 'gray', fontWeight: 'bold' }}>{translate('menu.welcome')}</Grid>
        </Box>
      </CardContent>
    </Card>
  )
}
