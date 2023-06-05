import { DashboardOutlined } from '@mui/icons-material'
import GridViewIcon from '@mui/icons-material/GridView'
import ListIcon from '@mui/icons-material/List'

export type MenuItemProps = {
  id: string
  title: string
  type: 'item' | 'group' | 'collapse'
  url?: string
  icon?: any
  breadcrumbs: boolean
  external?: string
  target?: string | boolean
  disabled?: boolean
  chip?: any
  children?: any | any[]
}

export const items: MenuItemProps[] = [
  {
    id: 'home',
    title: 'dashboard',
    type: 'item',
    url: '/',
    icon: DashboardOutlined,
    breadcrumbs: true,
  },
  {
    id: 'users',
    title: 'user_management',
    type: 'collapse',
    icon: GridViewIcon,
    breadcrumbs: true,
    children: [
      {
        id: 'users/list',
        title: 'user_list',
        type: 'item',
        icon: ListIcon,
        url: '/Users',
        breadcrumbs: true,
      },
    ],
  },
  {
    id: 'bikes',
    title: 'bike_management',
    type: 'collapse',
    icon: GridViewIcon,
    breadcrumbs: true,
    children: [
      {
        id: 'bikes/list',
        title: 'bike_list',
        type: 'item',
        icon: ListIcon,
        url: '/bikes',
        breadcrumbs: true,
      },
      {
        id: 'bikestatuses/list',
        title: 'bike_status',
        type: 'item',
        icon: ListIcon,
        url: '/bikestatuses',
        breadcrumbs: true,
      },
    ],
  },
  {
    id: 'rentals',
    title: 'rental_management',
    type: 'collapse',
    icon: GridViewIcon,
    breadcrumbs: true,
    children: [
      {
        id: 'rentals/list',
        title: 'rental_list',
        type: 'item',
        icon: ListIcon,
        url: '/rentals',
        breadcrumbs: true,
      },
      {
        id: 'bills/list',
        title: 'bill_list',
        type: 'item',
        icon: ListIcon,
        url: '/bills',
        breadcrumbs: true,
      },
    ],
  },
]
