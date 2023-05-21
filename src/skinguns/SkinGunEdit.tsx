import { UploadImages } from '@/components/UploadImages'
import React from 'react'
import {
  Create,
  Edit,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from 'react-admin'
import * as api from '../apis/skingun.api'

export const SkinGunEdit = () => {
  const redirect = useRedirect()
  const notify = useNotify()

  const transformData = async (values: any) => {
    let _assets = []
    if (values.assets) {
      const upload = await UploadImages(values.assets)
      _assets = upload.data
    }
    const val = {
      name: values.name,
      original: values.original,
      type: values.type,
      assets: _assets,
    }
    console.log('val ', val)

    return val
  }

  const onSaveOrUpdate = async (values: any) => {
    const newValues: any = await transformData(values)
    let response = await api.uploadImage(newValues)
    try {
      if (response) {
        notify('Success')
        redirect('/skinguns')
      }
    } catch (err) {
      notify('Failed')
    }
  }

  return (
    <div>
      <Edit>
        <SimpleForm>
          <TextInput disabled label="Id" source="id" />
          <TextInput variant="outlined" source="name" />
          <TextInput multiline source="original" variant="outlined" />
          <TextInput source="type" variant="outlined" />
          <TextInput source="status" variant="outlined" />
          <ImageInput source="assets" label="Đăng ảnh" multiple accept="image/*">
            <ImageField source="url" title="Ảnh" />
          </ImageInput>
        </SimpleForm>
      </Edit>
    </div>
  )
}
