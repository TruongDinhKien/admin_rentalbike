import { FC } from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  Typography,
  Theme,
  useMediaQuery,
  Pagination as PaginationUI,
} from '@mui/material'
import { useTranslate } from 'react-admin'
import { PaginationProps } from './types'

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  const { page = 1, perPage = 10, rowsPerPageOptions = [5, 10, 25], onChangePage, onChangePerPage, total = 0 } = props
  const totalPages = Math.ceil(total / perPage)

  const translate = useTranslate()
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 16,
        alignItems: 'center',
        flexDirection: isSmall ? 'column' : 'row',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography>{translate('label.display')}</Typography>
        <FormControl
          style={{
            padding: '0 5px',
            //'& .MuiInput-underline:before': {
            //borderBottom: 0,
            //},
            //'&:hover .MuiInput-underline:before': {
            //borderBottom: 0,
            //},
          }}
        >
          <Select
            style={{
              margin: '0px 8px',
            }}
            labelId="demo-customized-select-label"
            variant="outlined"
            value={perPage}
            onChange={onChangePerPage}
          >
            {rowsPerPageOptions.map((v, idx) => (
              <MenuItem value={v} key={idx}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography>{translate('label.record')}</Typography>
      </div>
      <div>
        <PaginationUI
          shape="rounded"
          size={isSmall ? 'small' : 'medium'}
          page={page}
          onChange={onChangePage}
          count={totalPages || 1}
          siblingCount={isSmall ? 0 : 1}
          sx={{
            marginTop: isSmall ? 10 : 0,
          }}
        />
      </div>
    </div>
  )
}

export { Pagination }
