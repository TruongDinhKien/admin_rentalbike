import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, Card, CardContent, Container, Grid, Link, Typography } from '@mui/material'
import { Form, TextInput, useLogin, useNotify } from 'react-admin'
import { Copyright } from '../components'
import { style } from './style'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export const SignIn = () => {
  const login = useLogin()
  const notify = useNotify()
  const [loading, setLoading] = useState(false)
  const [showPasswd, setShowPasswd] = useState(false)

  const handleSubmit = (data: any) => {
    setLoading(true)
    const { email, password } = data
    const loginRQ = {
      email,
      password,
    }

    login(loginRQ).catch((err: Error) => {
      setLoading(true)
      notify('Username or Password is invalid , Try again!!!')
    })
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
              Welcome to Rental Bike
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
              <TextInput
                source="password"
                margin="dense"
                required
                fullWidth
                label="Password"
                type={showPasswd ? 'text' : 'password'}
                autoComplete="current-password"
                size="medium"
                InputProps={{
                  endAdornment: showPasswd ? (
                    <VisibilityIcon
                      color="primary"
                      onClick={() => setShowPasswd(!showPasswd)}
                      sx={{ cursor: 'pointer', width: '5%', justifyItems: 'center', marginLeft: '10px' }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      onClick={() => setShowPasswd(!showPasswd)}
                      sx={{ cursor: 'pointer', width: '5%', justifyItems: 'center', marginLeft: '10px' }}
                    />
                  ),
                }}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Login
              </Button>
            </Form>

            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
                <br></br>
                <Link href="/forget-password" variant="body2">
                  {'Forgot password'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
