import { ActionButton } from '@/components'
import { useImageUpload } from '@/hooks/ImageUpload'
import _ from 'lodash'
import { Edit, ImageField, ImageInput, SimpleForm, TextInput, required } from 'react-admin'

export const UserEdit = () => {
  const { ImageUpload, onUpdateImg, isUpload } = useImageUpload()

  const transformData = async (data: any) => {
    const imgUrl = await onUpdateImg()
    if (!imgUrl) return

    let value = _.omit(data, ['id'])
    value = _.omitBy(value, val => val === null)
    value = { ...value, avatarUrl: imgUrl }

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
          <ImageUpload source="avatarUrl" label="resources.user.uploadAvatar" />
        </SimpleForm>
      </Edit>
    </div>
  )
}
