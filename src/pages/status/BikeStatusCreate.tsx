import { BackToListBtn } from '@/components'

import { Create, DeleteButton, SimpleForm, TextInput, required } from 'react-admin'

export const BikeStatusCreate = () => {
  return (
    <Create actions={<BackToListBtn />}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
