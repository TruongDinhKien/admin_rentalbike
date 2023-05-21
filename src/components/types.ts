import { ReactNode, SyntheticEvent, RefObject } from 'react'
import { TableHeader, MetaLink } from '@/types'
import type { Moment } from 'moment'
import type { GridDirection, GridSize, GridSpacing } from '@mui/material'

export type ActionsProps = {
  children: ReactNode
  justifyContent?: any
  gridstyle?: boolean | GridSize | undefined
  borderTop?: boolean
}

export type Variant = 'filled' | 'standard' | 'outlined' | undefined
export type ButtonVariant = 'contained' | 'outlined' | undefined
export type ModalMaxWidth = false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined

export type AutoCompleteInputProps = {
  name?: string
  resource?: string
  allowEmpty?: boolean
  title?: string
  choices?: Record<string, any>[] | undefined
  source: string
  optionValue?: string
  optionText?: string
  variant?: Variant
  searchFields?: string[]
  disabled?: boolean
  emptyText?: string
  emptyValue?: string | number
  fullWidth?: boolean
  label?: string
  renderOptionText?: (record?: Record<string, any>) => any
  renderOptionCustom?: (record?: Record<string, any>) => any
  onChange?: (e: any) => void
  multiple?: boolean
  required?: boolean
  show?: boolean
  gridSize?: number
}

export type BodyProps = RowProps & {
  rows: Record<string, any>[]
  startIdx?: number
  columnActions?: ReactNode | any
  renderCols?: any
  loading?: boolean
  classStyle?: string
  keyWord?: string
}

export type BreadscrumbsProps = {
  classes?: string
}

export type LocationState = {
  location: {
    pathname: string
  }
}

type ButtonColor = 'primary' | 'secondary' | 'inherit' | 'default' | undefined

export interface NPButtonProps {
  title: string
  icon?: ReactNode
  handleClick?: ((event?: SyntheticEvent) => void | Promise<void>) | any
  type?: 'button' | 'submit'
  disabled?: boolean
  loading?: boolean
  style?: Record<string, any>
  color?: ButtonColor
  recordNumbers?: number
  variant?: ButtonVariant
  className?: any
  mLeft?: boolean
  showFull?: boolean
}

export type ToolbarProps = {
  total?: number
  customWidth?: number
  cardActions?: any
  sumTitle?: any
}

export interface PaginationProps {
  page?: number
  perPage?: number
  rowsPerPageOptions?: number[]
  onChangePage?: ((e: SyntheticEvent, newPage: any) => void) | any
  onChangePerPage?: (newPerPage: any) => void
  count?: number
  total?: number
}

export type DatagridTableProps = PaginationProps &
  BodyProps &
  HeaderProps &
  ToolbarProps & {
    loading?: boolean
    cardActions?: any
    customWidth?: number
    onSeeMore?: () => void
    tableTitle?: string
    mobileList?: any
    keyWord?: string
    noScroll?: boolean
    sumTitle?: any
  }

export type DateTimePickerInputProps = {
  initialValue?: Date
  minDate?: Moment
  maxDate?: Moment
  variant?: Variant
  dateFormat?: string
  dateTimeFormat?: string
  label?: string
  locale?: string
  showTime?: boolean
  source: string
  fullWidth?: boolean
  onSearch?: (source: any, date: Date) => void
  helperText?: string
  resource: string
  title?: string
  onChange?: (value: any) => any
  value?: Date
  show?: boolean
  gridSize?: number
}

export type ExportButtonProps = {
  title: string
  icon: ReactNode
  method: string
  exportFilter: Record<string, any>
  csvNotificationTitle?: string
  excelNotificationTitle?: string
  type: 'txt' | 'csv' | 'xlsx'
  exportFileName?: string
  resource: string
  color?: ButtonColor
}

export type FilterFormProps = {
  resource: string
  children: ReactNode[] | ReactNode
  filterValues: Record<string, any>
  setFilterValues: (filterValues: Record<string, any>) => void
  direction?: GridDirection
  onValidate?: (value: Record<string, any>) => void
  defaultValue?: Record<string, any>
  className?: any
}

export type GridDataProps = {
  resource: string
  data: Record<string, any>
  fullWidthField?: string[]
  headers?: Record<string, any>[]
  renderCols?: any
}

export type HeaderProps = {
  resource: string
  headers?: TableHeader[]
  startIdx?: number
  isTranslateHeader?: boolean
  columnActions?: ReactNode | any
  selectCol?: boolean
  selectAll?: boolean
  setSelectAll?: any
}

export type ImageFieldWithLightboxProps = {
  className?: string
  emptyText?: string
  source: string
  src: string
  title: string
}

export type LinkFieldProps = {
  classes?: Record<string, any>
  path?: string
  children: ReactNode
  state?: Record<string, any>
  icon?: ReactNode
  search?: Record<string, any>
  color?: ButtonColor
  styleColor?: string
}

export type NPModalProps = {
  open: boolean
  onClose: () => void
  onOk?: (record?: any) => void
  title: string
  fullWidth?: boolean
  maxWidth?: ModalMaxWidth
  fullScreen?: boolean
  content: ReactNode
  actions?: ReactNode
}

export type MoneyInputProps = {
  inputRef: RefObject<ReactNode>
  value?: string | number | Record<string, any> | any
  onChange: (event: SyntheticEvent) => void
  suffix?: string
  min?: number
  max?: number
  format?: string
  thousandSeparator?: string
}

export type NPFormProps = {
  children?: any
  customGridCss?: any
  id?: number
  setRecordId?: (id: number) => void
  validate?: (value: Record<string, any>) => any
  resource?: string
  transformData?: (values: Record<string, any>) => void
  direction?: GridDirection
  onDone?: (value: boolean) => void
  record?: Record<string, any>
  remoteMethod?: (values: any) => void
  toolbar?: ReactNode
  spacing?: GridSpacing
  onBack?: () => void
  loading?: boolean
  loadingSubmit?: boolean
  disabledPristine?: boolean
  disableButton?: boolean
  iconBtn?: any
  buttonTitle?: string
  updateLinkTo?: (form: any, values: any) => void
  method?: string
  handleClose?: () => void
}

export type NPListProps = DatagridTableProps & {
  title?: string
  filters?: ReactNode
  startIdx?: number
  isTranslateHeader?: boolean
  page?: number
  perPage?: number
  onChangePage?: (e: SyntheticEvent, newPage: any) => void
  onChangePerPage?: (newPerPage: any) => void
  columnActions?: ReactNode | any
  renderCols?: any
  total?: number
  cardActions?: ReactNode
  gridItemStyle?: number
  gridInputStyle?: number
  gridTitleStyle?: number
  fullWidth?: boolean
  keyWord?: string
  mt?: boolean
}

export type RowProps = {
  idx?: number
  headers: TableHeader[]
  row?: any
  startIdx?: number
  renderCols?: any
  columnActions?: ReactNode | any
  selectCol?: boolean
  selectedRows?: any[]
  setSelectedRows?: any
  selectAll?: boolean
  setSelectAll?: any
}

export type TitleProps = {
  title: string
}

export interface SortType {
  field: string
  order: string
}

export interface PaginationType {
  page?: number
  perPage?: number
}

export interface CheckboxProps {
  label?: string
  source: string
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top'
  checkboxStyles?: string
  value?: boolean
  onChange?: (value: boolean) => void
  gridSize?: number
  justifyContent?: 'center' | 'space-between'
}

export interface NPReferenceFieldProps {
  source?: string
  record: { id: number; [prop: string]: any }
  resource: string
  reference: string
  field: string
  link?: boolean | string | any
  render?: Function
}

export interface Invitation {
  id?: number
  slug?: string
  guest: string
  pnr: string
  url: string
  eventId: number
  orderId: number
  organizerId: number
}

export type ChartType = 'sales' | 'ticket'

export interface ChartData {
  data: any[]
  keys: string[]
  indexBy: string
  groupMode: 'stacked' | 'grouped' | undefined
  xLegend: string
  yLegend: string
}

export type ArrayInputProps = {
  source: string
  values?: any[]
  children: any
  isClearActions?: boolean
}

export type FileProps = {
  source: string
  title: string
  record?: any
  multiple?: boolean
}

export type GroupInputProps = {
  onChange?: (evt: any, idx: number) => void
  value?: Record<string, any>
  children: any
}
