// third-party
import { Theme } from '@mui/material'
import { merge } from 'lodash'

// project import
import Badge from './Badge'
import Button from './Button'
import CardContent from './CardContent'
import Checkbox from './Checkbox'
import Chip from './Chip'
import IconButton from './IconButton'
import InputLabel from './InputLabel'
import LinearProgress from './LinearProgress'
import Link from './Link'
import ListItemIcon from './ListItemIcon'
import OutlinedInput from './OutlinedInput'
import Tab from './Tab'
import TableCell from './TableCell'
import Tabs from './Tabs'
import Typography from './Typography'
import Paper from './Paper'
import Drawer from './Drawer'
import Toolbar from './Toolbar'
import RAList from './RAList'
import FileInput from './FileInput'
import Autocomplete from './Autocomplete'

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Button(theme),
    Badge(theme),
    CardContent(),
    Checkbox(theme),
    Chip(theme),
    IconButton(theme),
    InputLabel(theme),
    LinearProgress(),
    Link(),
    ListItemIcon(),
    OutlinedInput(theme),
    Tab(theme),
    TableCell(theme),
    Tabs(),
    Typography(),
    Paper(theme),
    Drawer(theme),
    Toolbar(theme),
    RAList(theme),
    FileInput(theme),
    Autocomplete(theme),
  )
}
