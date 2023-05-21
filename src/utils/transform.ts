import _ from 'lodash'
import moment from 'moment'
import { TableHeader } from '@/types.d'
import { DATETIME_FORMAT, DEFAULT_CURRENCY, HeaderType } from '@/constants'

export const formatCurrency = (value: number) => {
  value = Number.isNaN(Number(value)) ? 0 : Number(value)
  value = Math.sign(value) === -1 ? 0 : value
  return value.toLocaleString()
}

export const formatCurrencyWithUnit = (value: number, currencyId?: string) => {
  return `${formatCurrency(value)} ${currencyId || DEFAULT_CURRENCY}`
}

export const formatDateTime = (value: string | undefined, format = DATETIME_FORMAT) => {
  if (!value) return ''
  return moment(value).format(format)
}

export const normalize = (row: any, header: TableHeader) => {
  const { id, type, fieldMapping = '', format = DATETIME_FORMAT } = header
  let val = _.get(row, id, '')
  const currencyUnit = _.get(row, fieldMapping, '')

  if (type === HeaderType.NUMER) {
    val = formatCurrency(val)
  }

  if (type === HeaderType.ARRAY) {
    val = val
      ? val.map((value: any) => {
          return value[fieldMapping]
        })
      : []
    val = val.join(', ')
  }

  if (type === HeaderType.CURRENCY) {
    val = formatCurrencyWithUnit(val, currencyUnit)
  }

  if (type === HeaderType.TERM && val) {
    val = moment.duration(val, 'months').locale('vi').humanize({ M: 30 })
  }

  if (type === HeaderType.PERCENT && val) {
    val = `${val}%`
  }

  if (type === HeaderType.DATETIME && val) {
    val = formatDateTime(val, format)
  }
  return val
}
