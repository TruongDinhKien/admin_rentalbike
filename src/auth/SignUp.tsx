import * as api from '@/apis'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, Card, CardContent, Container, Grid, Link, Typography } from '@mui/material'
import { Form, TextInput, useNotify, useRedirect } from 'react-admin'
import { Copyright } from '../components'
import { style } from './style'

export const SignUp = () => {
  const redirect = useRedirect()
  const notify = useNotify()
  const handleSubmit = async (data: any) => {
    const email = await data.email
    const firstName = await data.firstName
    const lastName = await data.lastName
    const phonenumber = await data.phoneNumber
    const password = await data.password

    const rs = await api.signUp(data)
    if (rs) {
      notify('Đăng ký tài khoản thành công')
      redirect('/login')
    }
    // if (password.length < 6) {
    //   alert('Password must be larger than 6')
    // } else if (phonenumber.length !== 10) {
    //   alert('Phone number must be 10')
    // } else if (firstName === '' || lastName === '') {
    //   alert('Username is invalid , try again')
    // } else if (email === '') {
    //   alert('Email is invalid')
    // } else {
    //   const rs = await api.signUp(data)
    //   if (rs) {
    //     redirect('/signin')
    //   }
    // }
  }

  return (
    <Container sx={style.container} component="main" maxWidth="xs">
      <Card>
        <CardContent>
          <Box sx={style.cardHeaderContainer}>
            <Avatar sx={style.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          </Box>
          <Box component="div" sx={{ mt: 1 }}>
            <Form onSubmit={handleSubmit}>
              {/* <TextInput source="username" margin="dense" required fullWidth label="Username" autoFocus size="medium" /> */}
              <TextInput source="phoneNumber" margin="dense" required fullWidth label="Phone number" size="medium" />
              <TextInput source="email" margin="dense" required fullWidth label="Email" size="medium" />
              <TextInput
                source="password"
                margin="dense"
                required
                fullWidth
                label="Password"
                type="password"
                size="medium"
              />
              <TextInput source="firstName" margin="dense" required fullWidth label="First name" size="medium" />
              <TextInput source="lastName" margin="dense" required fullWidth label="Last name" size="medium" />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
          </Form>

            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2">
                  {'Back to login'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}
