import { ActionButton } from '@/components'
import ImageUpload from '@/components/ImageUpload'
import _ from 'lodash'
import {  useState } from 'react'
import { Edit, SimpleForm, TextInput, required } from 'react-admin'

export const UserEdit = () => {
  const transformData = (data: any) => {
    let value = _.omit(data, ['id'])
    value = _.omitBy(value, val => val === null)
    value = { ...value }
    return value
  }
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <Edit transform={transformData} actions={<ActionButton />}>
        <SimpleForm>
          <TextInput source="email" validate={required()} />
          <TextInput source="phoneNumber" />
          <TextInput source="firstName" />
          <TextInput source="lastName" />
          <TextInput source="roleName" />
        </SimpleForm>
      </Edit>
      <ImageUpload url={url} setUrl={setUrl} loading={loading} setLoading={setLoading}></ImageUpload>
    </div>
  )
}
