import { Edit, SimpleForm, TextInput, Title, useDataProvider, useNotify, useRedirect } from 'react-admin'
import * as React from 'react'
import { Auth } from '../types.d'
import { Avatar, Button, Typography, Container, Link, Grid, Box, Card, CardContent } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Form } from 'react-admin'
import { Copyright } from '../components'
import { style } from './style'
import { useState } from 'react'

export const ResetPassword = () => {
  const dataProvider = useDataProvider()
  const redirect = useRedirect()
  const notify = useNotify()
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const handleSubmit = async (data: any) => {
    const { password, confirmPassword } = data
    setLoadingSubmit(true)
    try {
      const res: any = await dataProvider.REMOTE('users', {
        method: `reset-password/finish`,
        requestMethod: 'PUT',
        data: data,
      })
      if (res) {
        notify('Reset password success')
        redirect('/login')
      }
    } catch (e) {
      notify('Failed')
    }
  }
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
                source="resetKey"
                margin="dense"
                required
                fullWidth
                label="Reset Key"
                type="text"
                autoComplete="text"
                size="medium"
              />
              <TextInput
                source="password"
                margin="dense"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                size="medium"
              />
              <TextInput
                source="confirmPassword"
                margin="dense"
                required
                fullWidth
                label="ConfirmPassword"
                type="password"
                size="medium"
              />

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Reset Password
              </Button>
            </Form>
          </Box>
        </CardContent>
      </Card>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
