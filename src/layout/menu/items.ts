import PostAddIcon from '@mui/icons-material/PostAdd'
import { DashboardOutlined } from '@mui/icons-material'
import GridViewIcon from '@mui/icons-material/GridView'
import ListIcon from '@mui/icons-material/List'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

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
    title: 'Dashboard',
    type: 'item',
    url: '/',
    icon: DashboardOutlined,
    breadcrumbs: true,
  },
  {
    id: 'users',
    title: 'Users',
    type: 'collapse',
    icon: GridViewIcon,
    breadcrumbs: true,
    children: [
      {
        id: 'users/list',
        title: 'User list',
        type: 'item',
        icon: ListIcon,
        url: '/Users',
        breadcrumbs: true,
      },
    ],
  },
  {
    id: 'bikes',
    title: 'Bikes',
    type: 'collapse',
    icon: GridViewIcon,
    breadcrumbs: true,
    children: [
      {
        id: 'bikes/list',
        title: 'Bike list',
        type: 'item',
        icon: ListIcon,
        url: '/bikes',
        breadcrumbs: true,
      },
      {
        id: 'bikestatuses/list',
        title: 'Status',
        type: 'item',
        icon: ListIcon,
        url: '/bikestatuses',
        breadcrumbs: true,
      },
    ],
  },
  {
    id: 'rentals',
    title: 'Rental',
    type: 'collapse',
    icon: GridViewIcon,
    breadcrumbs: true,
    children: [
      {
        id: 'rentals/list',
        title: 'Rental list',
        type: 'item',
        icon: ListIcon,
        url: '/rentals',
        breadcrumbs: true,
      },
    ],
  },
]
