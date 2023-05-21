import { FC, useMemo } from 'react'
import { Chip } from '@mui/material'
import _ from 'lodash'
import { StatusFieldMetadata } from '@/constants'

export type StatusChipProps = {
  record: any
  source: string
}

export const StatusChip: FC<StatusChipProps> = ({ source, record }) => {
  const meta = useMemo(() => {
    const value = _.get(record, source)
    return StatusFieldMetadata.MAPPING[value]
  }, [record, source])

  return <Chip variant="outlined" color={meta?.color} label={meta?.name} />
}
