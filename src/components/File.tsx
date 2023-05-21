import { FC, useMemo } from 'react'
import { FileProps } from './types'
import { Avatar } from '@mui/material'
import _ from 'lodash'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { BASE_URL } from '../constants'

export const File: FC<FileProps> = ({ record, source, title, ...props }) => {
  const { src, alt } = useMemo((): { src: string; alt: string } => {
    let fileSrc = _.get(record, source)
    const rex = /^blob:\w+/
    if (!rex.test(fileSrc)) {
      fileSrc = `${BASE_URL}${fileSrc}`
    }
    const fileAlt = _.get(record, title)
    return { src: fileSrc, alt: fileAlt }
  }, [record])

  return (
    <Avatar sx={{ width: 60, height: 60 }} src={src} alt={alt} component="a" href={src} variant="square" {...props}>
      <AttachFileIcon />
    </Avatar>
  )
}
