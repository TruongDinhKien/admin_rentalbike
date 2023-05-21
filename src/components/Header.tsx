import { FC } from 'react'
import { TableHead, TableRow, TableCell, Checkbox } from '@mui/material'
import { useTranslate } from 'react-admin'
import type { HeaderProps } from './types'
import { HeaderType, Align } from '@/constants'

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const {
    startIdx,
    resource,
    headers = [],
    isTranslateHeader,
    columnActions,
    selectCol,
    selectAll,
    setSelectAll,
  } = props

  const translate = useTranslate()

  return (
    <TableHead>
      <TableRow>
        {selectCol && (
          <TableCell align="center" size="small" variant="head">
            <Checkbox checked={selectAll} onChange={() => setSelectAll(!selectAll)} />
          </TableCell>
        )}
        {startIdx && (
          <TableCell align="center" size="small" variant="head">
            {isTranslateHeader ? translate(`resources.${resource}.fields.idx`) : 'No.'}
          </TableCell>
        )}
        {headers.map((header, idx) => {
          let { type = undefined, align = Align.LEFT } = header

          if (type === 'number') {
            align = Align.RIGHT
            type = HeaderType.NUMER
          }

          return (
            <TableCell key={idx} align={align} size="small" variant="head">
              {isTranslateHeader
                ? translate(`resources.${resource}.fields.${header.label ?? header.id}`, { required: '' })
                : header.label}
              {header.subHeader && ` ${header.subHeader}`}
            </TableCell>
          )
        })}
        {columnActions && (
          <TableCell align="center" rowSpan={1} size="small" variant="head">
            {translate(`common.action`)}
          </TableCell>
        )}
      </TableRow>
    </TableHead>
  )
}

export { Header }
