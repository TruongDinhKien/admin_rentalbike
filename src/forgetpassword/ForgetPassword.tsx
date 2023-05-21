import { Edit, SimpleForm, TextInput, Title, useDataProvider } from 'react-admin'
import * as React from 'react'
import { Auth } from '../types.d'
import { Avatar, Button, Typography, Container, Link, Grid, Box, Card, CardContent } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Form, useRedirect, useNotify } from 'react-admin'
import { Copyright } from '../components'
import { style } from './style'
import { useEffect, useState } from 'react'

export const ForgetPassword = () => {
  const dataProvider = useDataProvider()
  const redirect = useRedirect()
  const notify = useNotify()
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const handleSubmit = async (data: any) => {
    const { email } = data
    setLoadingSubmit(true)

    try {
      const res: any = await dataProvider.REMOTE('users', {
        method: `reset-password/init`,
        requestMethod: 'POST',
        data: data,
      })
      if (res) {
        setLoadingSubmit(false)
        notify('Get code successful, check your email')
        redirect('/reset-password')
      }
    } catch (err) {
      setLoadingSubmit(false)
      notify('Email does not exist')
    }
  }
  // const checkTimeout = setTimeout(handleSubmit, 3000)
  return (
    <Container component="main" maxWidth="xs" sx={style.container}>
      <Card>
        <CardContent>
          <Box sx={style.cardHeaderContainer}>
            <Avatar sx={style.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset password
            </Typography>
          </Box>
          <Box component="div" sx={{ mt: 1 }}>
            <Form onSubmit={handleSubmit}>
              <TextInput
                source="email"
                margin="dense"
                required
                fullWidth
                label="Email"
                autoComplete="Email"
                autoFocus
                size="medium"
              />

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Get code
              </Button>
            </Form>
          </Box>
        </CardContent>
      </Card>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
