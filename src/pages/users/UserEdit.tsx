import { ActionButton } from '@/components'
import ImageUpload from '@/components/ImageUpload'
import _ from 'lodash'
import { useState } from 'react'
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
          <TextInput label="resources.user.email" source="email" validate={required()} />
          <TextInput label="resources.user.phone" source="phoneNumber" />
          <TextInput label="resources.user.firstName" source="firstName" />
          <TextInput label="resources.user.lastName" source="lastName" />
          {/* <TextInput source="roleName" /> */}
        </SimpleForm>
      </Edit>
      <ImageUpload url={url} setUrl={setUrl} loading={loading} setLoading={setLoading}></ImageUpload>
    </div>
  )
}
