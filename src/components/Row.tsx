import { FC, useEffect, useState } from 'react'
import { TableRow, TableCell, Checkbox } from '@mui/material'
import _ from 'lodash'
import type { RowProps } from './types'
import { normalize } from '../utils'

const Row: FC<RowProps> = (props: RowProps) => {
  const {
    row,
    idx = 1,
    headers,
    startIdx,
    columnActions,
    renderCols,
    selectCol,
    selectedRows,
    setSelectedRows,
    selectAll,
    setSelectAll,
  } = props
  const index = startIdx ? startIdx + idx : idx + 1
  const [isSelected, setIsSelected] = useState(false)

  const onSelectChange = () => {
    setIsSelected(!isSelected)
    if (selectedRows && setSelectedRows) {
      if (!isSelected) {
        setSelectedRows([...selectedRows, row])
      } else {
        setSelectAll(false)
        const index = selectedRows.findIndex(value => value.id === row.id)
        const newSelectedRows = [...selectedRows]
        newSelectedRows.splice(index, 1)
        setSelectedRows(newSelectedRows)
      }
    }
  }

  useEffect(() => {
    if (selectAll) {
      setIsSelected(true)
    } else {
      const result = selectedRows?.filter(value => value.id === row.id)
      if (!_.isEmpty(result)) {
        setIsSelected(true)
      } else {
        setIsSelected(false)
      }
    }
  }, [selectAll])

  useEffect(() => {
    const result = selectedRows?.filter(value => value.id === row.id)
    if (!_.isEmpty(result)) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [selectedRows])

  return (
    <TableRow hover>
      {selectCol && (
        <TableCell key={`select.${index}`} align="center" size="small" variant="body">
          <Checkbox checked={isSelected} onChange={onSelectChange} />
        </TableCell>
      )}
      {startIdx && (
        <TableCell key={`${index}`} align="center" size="small" variant="body">
          {index}
        </TableCell>
      )}
      {headers.map((header, index) => {
        const value = header.customField ? row : normalize(row, header)
        const render = renderCols && renderCols[header.id]
        return (
          <TableCell
            key={`${index}`}
            align={header.align || (header.type === 'number' && 'right') || 'left'}
            style={header.style}
            size="small"
            variant="body"
          >
            {render ? render(value, idx) : value}
          </TableCell>
        )
      })}
      {columnActions && (
        <TableCell align="center" rowSpan={1} size="small" variant="body">
          {columnActions(row)}
        </TableCell>
      )}
    </TableRow>
  )
}

export default Row
