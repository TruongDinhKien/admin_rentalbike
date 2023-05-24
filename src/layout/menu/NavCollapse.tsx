import { Fragment, FC, useEffect, useState } from 'react'
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, List, Collapse } from '@mui/material'
import { MenuItemProps } from './items'
import { useSidebarState, useStore, useTranslate } from 'react-admin'
import { MENU_TEXT_COLOR, MENU_ICON_SELECTED_COLOR } from '@/constants'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { NavItem } from './NavItem'
import _ from 'lodash'

type NavCollapseProps = {
  item: MenuItemProps
  level?: number
}

export const NavCollapse: FC<NavCollapseProps> = ({ item, level = 1 }) => {
  const [drawerOpen] = useSidebarState()
  const [open, setOpen] = useState(false)
  const translate = useTranslate()
  const [menu] = useStore('menu')

  const itemHandler = () => {
    setOpen(!open)
  }

  const Icon = item.icon

  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false

  useEffect(() => {
    const selected = _.get(menu, level) === item.id
    setOpen(selected)
  }, [])

  return (
    <Fragment>
      <ListItemButton
        disabled={item.disabled}
        onClick={itemHandler}
        selected={open}
        sx={{
          zIndex: 1201,
          pl: drawerOpen ? `${level * 28}px` : 1.5,
          py: !drawerOpen && level === 1 ? 1.25 : 1,
          ...(drawerOpen
            ? {
                '&.Mui-selected': {
                  color: MENU_ICON_SELECTED_COLOR,
                  bgcolor: 'transparent',
                },
              }
            : {
                borderRadius: 1.5,
                width: 36,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
              }),
        }}
      >
        {itemIcon && (
          <ListItemIcon
            sx={{
              minWidth: 28,
              color: open ? MENU_ICON_SELECTED_COLOR : MENU_TEXT_COLOR,
              ...(!drawerOpen && {
                borderRadius: 1.5,
                width: 36,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
              }),
            }}
          >
            {itemIcon}
          </ListItemIcon>
        )}
        {(drawerOpen || (!drawerOpen && level !== 1)) && (
          <ListItemText
            primary={
              <Typography
                variant="h6"
                sx={{
                  color: open ? MENU_ICON_SELECTED_COLOR : MENU_TEXT_COLOR,
                }}
              >
                {translate(`menu.${item.title}`)}
              </Typography>
            }
          />
        )}
        {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
          <Chip
            color={item.chip.color}
            variant={item.chip.variant}
            size={item.chip.size}
            label={item.chip.label}
            avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
          />
        )}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((element: MenuItemProps, index: number) => {
            return <NavItem key={index} item={element} level={2} parent={item.id} />
          })}
        </List>
      </Collapse>
    </Fragment>
  )
}
