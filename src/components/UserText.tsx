import { FC, useMemo } from 'react'
import { User } from '@/types.d'
import _ from 'lodash'

export type UserTextProps = {
  record?: User.Info
  source: string
  scheme: string
}

export const getUserText = ({ record, source, scheme }: UserTextProps) => {
  const { identifiers = [] } = record || {}
  const find = _.find(identifiers, (item: User.Identifier) => item.scheme === scheme)
  return _.get(find, source, '')
}

export const UserText: FC<UserTextProps> = ({ record = {}, source, scheme }) => {
  const { identifiers = [] } = record

  const text = useMemo(() => {
    const find = _.find(identifiers, (item: User.Identifier) => item.scheme === scheme)
    return _.get(find, source, '')
  }, [record, source])

  return <span>{text}</span>
}
