import { FC } from 'react'
import { Box, List, Typography } from '@mui/material'
import { NavItem } from './NavItem'
import { NavCollapse } from './NavCollapse'
import { useSidebarState, useTranslate } from 'react-admin'
import { MenuItemProps } from './items'

type NavGroupProps = {
  item: MenuItemProps
}

export const NavGroup: FC<NavGroupProps> = ({ item }) => {
  const translate = useTranslate()
  const [drawerOpen] = useSidebarState()
  const navCollapse = item.children?.map((menuItem: MenuItemProps) => {
    switch (menuItem.type) {
      case 'collapse':
        return <NavCollapse key={menuItem.id} item={menuItem} level={1} />
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        )
    }
  })

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography variant="subtitle2" color="textSecondary">
            {translate(`menu.${item.title}`)}
            </Typography>
          </Box>
        )
      }
      sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  )
}
