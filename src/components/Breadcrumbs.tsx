import { useEffect, useState, FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import { Grid, Typography } from '@mui/material'
import { MainCard } from './MainCard'
import { MenuItemProps } from '../layout/menu/items'
import _ from 'lodash'
import { useTranslate } from 'react-admin'

type BreadcrumbsProps = {
  navigation: MenuItemProps[]
  title: boolean
  titleBottom?: boolean
  card?: boolean
  divider?: boolean
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ navigation, title }) => {
  const location = useLocation()
  const translate = useTranslate()
  const [main, setMain] = useState<MenuItemProps>()
  const [item, setItem] = useState<MenuItemProps>()

  // set active item state
  const getCollapse = (menu: MenuItemProps) => {
    if (menu.children) {
      menu.children.filter((collapse: MenuItemProps) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse)
        } else if (collapse.type && collapse.type === 'item') {
          if (location.pathname === collapse.url) {
            setMain(menu)
            setItem(collapse)
          } else if (location.pathname.includes(collapse.url || '')) {
            const parts = location.pathname.split('/')
            setMain({
              id: location.pathname,
              url: location.pathname,
              title: _.last(parts) ?? '',
              breadcrumbs: true,
              type: 'item',
            })
            setItem(collapse)
          }
        }
        return false
      })
    } else {
      if (menu.type === 'collapse') {
        getCollapse(menu)
      } else {
        if (location.pathname.includes(menu.url || '')) {
          const parts = location.pathname.split('/')
          const last = _.last(parts)
          if (last) {
            setItem({
              id: location.pathname,
              url: location.pathname,
              title: last,
              breadcrumbs: true,
              type: 'item',
            })
            setMain({ ...menu, type: 'collapse' })
          } else {
            setMain(menu)
            setItem(menu)
          }
        }
      }
      return false
    }
  }

  useEffect(() => {
    navigation.map((menu: MenuItemProps) => {
      getCollapse(menu)
    })
  }, [location, location.pathname])

  let mainContent
  let itemContent
  let breadcrumbContent = <Typography />
  let itemTitle = ''

  // collapse item
  if (main && main.type === 'collapse') {
    mainContent = (
      <Typography
        component={Link}
        to={document.location.pathname}
        variant="h6"
        sx={{ textDecoration: 'none' }}
        color="textSecondary"
      >
        {translate(`menu.${main.title}`)}
      </Typography>
    )
  }

  // items
  if (item && item.type === 'item') {
    itemTitle = translate(`menu.${item.title}`)
    itemContent = (
      <Typography variant="subtitle1" color="textPrimary" sx={{ textTransform: 'capitalize' }}>
        {itemTitle}
      </Typography>
    )

    // main
    if (item.breadcrumbs) {
      breadcrumbContent = (
        <MainCard
          border={false}
          sx={{ mb: 3, bgcolor: 'transparent' }}
          //{...others}
          content={false}
        >
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Typography component={Link} to="/" color="textSecondary" variant="h6" sx={{ textDecoration: 'none' }}>
                  Home
                </Typography>
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && (
              <Grid item sx={{ mt: 2 }}>
                <Typography variant="h3" sx={{ textTransform: 'capitalize' }}>
                  {itemTitle}
                </Typography>
              </Grid>
            )}
          </Grid>
        </MainCard>
      )
    }
  }

  return breadcrumbContent
}
