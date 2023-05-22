import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Title } from 'react-admin'
import { Box, Grid } from '@mui/material'

export const Dashboard = () => (
  <Card>
    <Title title="Welcome to the administration" />
    <CardContent>
      <Box>
        <Grid style={{ textAlign: 'center', color: 'gray', fontWeight: 'bold' }}>Welcome to Bike Store</Grid>
      </Box>
    </CardContent>
  </Card>
)
