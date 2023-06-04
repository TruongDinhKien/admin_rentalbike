import { ActionButton } from '@/components'
import { useImageUpload } from '@/hooks/ImageUpload'
import _ from 'lodash'
import { useState } from 'react'
import { Edit, FunctionField, ImageField, SaveButton, SimpleForm, TextInput, required } from 'react-admin'

export const UserEdit = () => {
  const { ImageUpload, onUpdateImg, isUpload } = useImageUpload()

  const transformData = async (data: any) => {
    console.log(data, 'data')
    const imgUrl = await onUpdateImg()

    console.log(imgUrl, 'imgUrl')

    if (!imgUrl) return

    let value = _.omit(data, ['id'])
    value = _.omitBy(value, val => val === null)
    console.log(value, 'value')
    value = { ...value, avatarUrl: imgUrl }

    console.log(value, 'value')
    return value
  }

  return (
    <div>
      <Edit transform={transformData} actions={<ActionButton />}>
        <SimpleForm>
          <TextInput label="resources.user.email" source="email" validate={required()} />
          <TextInput label="resources.user.phone" source="phoneNumber" />
          <TextInput label="resources.user.firstName" source="firstName" />
          <TextInput label="resources.user.lastName" source="lastName" />
          {/* <TextInput source="roleName" /> */}
          <ImageUpload source="avatarUrl" />
        </SimpleForm>
      </Edit>
    </div>
  )
}
