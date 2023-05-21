import { forwardRef, useEffect, FC, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { MenuItemProps } from './items'
import { useSidebarState, useStore } from 'react-admin'
import { MENU_ICON_SELECTED_COLOR, MENU_TEXT_COLOR } from '@/constants'
import _ from 'lodash'

type NavItemProps = {
  item: MenuItemProps
  level?: number
  parent?: string
}

export const NavItem: FC<NavItemProps> = ({ item, level = 1, parent }) => {
  const [drawerOpen] = useSidebarState()
  const location = useLocation()

  const [menu, setMenu] = useStore('menu')

  const theme = useTheme()

  let itemTarget = '_self'
  if (item.target) {
    itemTarget = '_blank'
  }

  let listItemProps: any = {
    component: forwardRef((props: any, ref: any) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />),
  }
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget }
  }

  const itemHandler = (id: string) => {
    let current = { [level]: id }
    if (parent) {
      current = { ...current, [level - 1]: parent }
    }
    setMenu(current)
  }

  const Icon = item.icon

  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false

  const isSelected = useMemo(() => {
    if (menu) {
      let parentSelected = true
      if (menu[level - 1] && parent) {
        parentSelected = menu[level - 1] === parent
      }
      const selected = menu[level] === item.id
      return parentSelected && selected
    }
  }, [menu])

  // active menu item on page load
  useEffect(() => {
    const { pathname } = location
    const parts = pathname.split('/')
    let currentPath = 'home'
    if (parts) {
      currentPath = _.last(parts) || 'home'
    }
    if (currentPath === item.id) {
      itemHandler(currentPath)
    }
  }, [])

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: drawerOpen ? `${level * 28}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(drawerOpen
          ? {
              '&:hover': {
                bgcolor: 'primary.lighter',
              },
              '&.Mui-selected': {
                bgcolor: 'primary.lighter',
                borderRight: `2px solid ${theme.palette.primary.main}`,
                color: MENU_ICON_SELECTED_COLOR,
                '&:hover': {
                  color: MENU_ICON_SELECTED_COLOR,
                  bgcolor: 'primary.lighter',
                },
              },
            }
          : {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: 'secondary.lighter',
              },
            }),
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? MENU_ICON_SELECTED_COLOR : MENU_TEXT_COLOR,
            ...(!drawerOpen
              ? {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    bgcolor: 'secondary.lighter',
                  },
                }
              : isSelected && {
                  bgcolor: 'primary.lighter',
                  '&:hover': {
                    bgcolor: 'primary.lighter',
                  },
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
                color: isSelected ? MENU_ICON_SELECTED_COLOR : MENU_TEXT_COLOR,
              }}
            >
              {item.title}
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
    </ListItemButton>
  )
}
