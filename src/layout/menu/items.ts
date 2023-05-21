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
    ],
  },
  {
    id: 'skinguns',
    title: 'SkinGuns',
    type: 'collapse',
    icon: GridViewIcon,
    breadcrumbs: true,
    children: [
      {
        id: 'skinguns/list',
        title: 'List',
        type: 'item',
        icon: ListIcon,
        url: '/skinguns',
        breadcrumbs: true,
      },
      {
        id: 'posts/create',
        title: 'Create',
        icon: AddCircleOutlineIcon,
        type: 'item',
        url: '/skinguns/create',
        breadcrumbs: true,
      },
    ],
  },
]
