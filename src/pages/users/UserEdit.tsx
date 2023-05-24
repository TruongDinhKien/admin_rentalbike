import { ActionButton } from '@/components'
import _ from 'lodash'
import { Edit, SimpleForm, TextInput, required } from 'react-admin'

export const UserEdit = () => {
  const transformData = (data: any) => {
    let value = _.omit(data, ['id'])
    value = _.omitBy(value, val => val === null)
    value = { ...value }
    return value
  }

  return (
    <Edit transform={transformData} actions={<ActionButton />}>
      <SimpleForm>
        <TextInput source="email" validate={required()} />
        <TextInput source="phoneNumber" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="roleName" />
      </SimpleForm>
    </Edit>
  )
}
