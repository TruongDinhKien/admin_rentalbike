import React from 'react'
import { Box, Typography } from '@mui/material'

// project import
import { NavGroup } from './NavGroup'
import { NavItem } from './NavItem'
import { NavCollapse } from './NavCollapse'
import { items, MenuItemProps } from './items'
import { Fragment } from 'react'
import { SimpleBarScroll } from '@/components'

export const Navigation = () => {
  const navGroups = items.map((item: MenuItemProps) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} item={item} />
      case 'group':
        return <NavGroup key={item.id} item={item} />
      case 'item':
        return <NavItem key={item.id} item={item} />
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        )
    }
  })
  return <Box sx={{ pt: 2 }}>{navGroups}</Box>
}

export const DrawerContent = () => (
  <SimpleBarScroll
    sx={{
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column',
      },
    }}
  >
    <Fragment>
      <Navigation />
    </Fragment>
  </SimpleBarScroll>
)
