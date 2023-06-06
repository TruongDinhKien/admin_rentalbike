import { useRef, useState, FC } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  Popper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { MainCard, Transitions } from '@/components'
import { ProfileTab } from './ProfileTab'
import { SettingTab } from './SettingTab'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {  useGetIdentity, useLogout, useTranslate } from 'react-admin'
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
  const logout = useLogout();

  const handleLogout = async () => {
    logout()
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
  const { identity } = useGetIdentity()

  const iconBackColorOpen = 'grey.300'
  const baseUrl = process.env.REACT_APP_BASE_IMAGE_URL

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
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt="Profile user"
            src={`${baseUrl}/${identity?.avatarUrl}`}
            sx={{ marginLeft: '5px', width: 52, height: 52, bgcolor: green[500] }}
          />
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
                            <Typography variant="body2" color="textSecondary">
                              {`${translate('resources.profile.welcome')}`}, {identity?.fullName}
                            </Typography>
                          </Stack>
                        </Stack>
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
                            label={`${translate('resources.profile.name')}`}
                            {...a11yProps(0)}
                          />
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
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  )
}
