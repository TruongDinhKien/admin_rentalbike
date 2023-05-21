import { useState, FC, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { ShowButton, useRedirect } from 'react-admin'
import { Params, useParams } from 'react-router-dom'
import { dataProvider } from '@/provider'
import * as api from '@/apis'

export const ProfileTab: FC<any> = ({ handleLogout }) => {
  const theme = useTheme()
  const redirect = useRedirect()
  const params: any = useParams()
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [item, setItem] = useState<any>({})

  const fetchOne = async () => {
    try {
      setLoading(true)
      const res: any = await api.fetchUserProfile(params.id)
      if (res && res.data) {
        const item = res.data
        setItem(item)
        setLoading(false)
      }
    } catch (errs: any) {
      setLoading(false)
      setErr(errs.message)
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchOne()
    }
  }, [params.id])

  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index)
  }

  // eslint-disable-next-line no-unused-vars
  const directUserProfile = (params: any) => {
    redirect(`users/${params.id}/show`)
  }

  return (
    <List
      component="nav"
      sx={{
        p: 0,
        '& .MuiListItemIcon-root': {
          minWidth: 32,
          color: theme.palette.grey[500],
        },
      }}
    >
      {/* <ListItemButton selected={selectedIndex === 0} onClick={event => handleListItemClick(event, 0)}>
        <ListItemIcon>
        <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton> */}
      <ListItemButton selected={selectedIndex === 1} onClick={directUserProfile}>
        <ShowButton />
        <ListItemIcon>
          <AccountBoxIcon />
          <ListItemText style={{ fontWeight: 'bold', color: 'black' }} primary="View Profile" />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText style={{ fontWeight: 'bold', color: 'purple' }} primary="Logout" />
      </ListItemButton>
    </List>
  )
}
