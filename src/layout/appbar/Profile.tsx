import { useRef, useState, FC } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  IconButton,
  Paper,
  Popper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { MainCard, Transitions } from '@/components'
import { ProfileTab } from './ProfileTab'
import { SettingTab } from './SettingTab'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useDataProvider, useGetIdentity, useLogout, useRedirect, useTranslate } from 'react-admin'
import { green } from '@mui/material/colors'

// tab panel wrapper

const TabPanel: FC<any> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`,
  }
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

export const Profile = () => {
  const translate = useTranslate()
  const theme: any = useTheme()
  const redirect = useRedirect()

  const handleLogout = async () => {
    redirect('/login')
  }

  const anchorRef: any = useRef(null)
  const [open, setOpen] = useState(false)
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const [value, setValue] = useState(0)

  const handleChange = (event: any, newValue: number) => {
    // setValue(newValue)
    console.log('test')
  }
  const { identity, isLoading: identityLoading } = useGetIdentity()
  // console.log('check identy ty', identity)

  const iconBackColorOpen = 'grey.300'
  const avatar = 'https://i1.sndcdn.com/artworks-000435379884-wpolr3-t240x240.jpg'
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          borderRadius: 1,
          '&:hover': { bgcolor: 'secondary.lighter' },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar alt="profile user" src={avatar} sx={{ width: 52, height: 52, bgcolor: green[500] }} />
          <Typography variant="subtitle1">{identity?.username}</Typography>
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            {open && (
              // <Paper
              //   sx={{
              //     boxShadow: theme.customShadows.z1,
              //     width: 290,
              //     minWidth: 240,
              //     maxWidth: 290,
              //     [theme.breakpoints.down('md')]: {
              //       maxWidth: 250,
              //     },
              //   }}
              // >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <CardContent sx={{ px: 2.5, pt: 3 }}>
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item>
                        <Stack direction="row" spacing={1.25} alignItems="center">
                          {/*
                           *<Avatar alt="profile user" src={avatar1} sx={{ width: 32, height: 32 }} />
                           */}
                          <Stack>
                            <Typography variant="h6">MSSV: {identity?.id}</Typography>
                            <Typography variant="body2" color="textSecondary">
                              Hi, {identity?.username}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <IconButton size="large" color="secondary" onClick={handleLogout}>
                          <LogoutIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                  {open && (
                    <>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="profile tabs">
                          <Tab
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              textTransform: 'capitalize',
                            }}
                            icon={
                              <AccountCircleIcon
                                style={{
                                  marginBottom: 0,
                                  marginRight: '10px',
                                }}
                              />
                            }
                            label="Profile"
                            {...a11yProps(0)}
                          />
                          {/* <Tab
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              textTransform: 'capitalize',
                            }}
                            icon={
                              <SettingsIcon
                                style={{
                                  marginBottom: 0,
                                  marginRight: '10px',
                                }}
                              />
                            }
                            label="Setting"
                            {...a11yProps(1)}
                          /> */}
                        </Tabs>
                      </Box>
                      <TabPanel value={value} index={0} dir={theme.direction}>
                        <ProfileTab handleLogout={handleLogout} />
                      </TabPanel>
                      <TabPanel value={value} index={1} dir={theme.direction}>
                        <SettingTab />
                      </TabPanel>
                    </>
                  )}
                </MainCard>
              </ClickAwayListener>
              // </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  )
}
