import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, Card, CardContent, Container, Grid, Link, Typography } from '@mui/material'
import { Form, TextInput, useLogin, useNotify } from 'react-admin'
import { Copyright } from '../components'
import { style } from './style'

export const SignIn = () => {
  const login = useLogin()
  const notify = useNotify()

  const handleSubmit = (data: any) => {
    login(data).catch(() => notify('Username or Password is invalid , Try again!!!'))
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
                source="username"
                margin="dense"
                required
                fullWidth
                label="Username"
                autoComplete="username"
                autoFocus
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
