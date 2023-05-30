import { BackToListBtn } from '@/components'
import { Create, SimpleForm, TextInput, required } from 'react-admin'

export const UserCreate = () => {
  return (
    <Create actions={<BackToListBtn />}>
      <SimpleForm>
        <TextInput label="resources.user.email" source="email" validate={[required()]} />
        <TextInput label="resources.user.phone" source="phoneNumber" />
        <TextInput label="resources.user.firstName" source="firstName" />
        <TextInput label="resources.user.lastName" source="lastName" />
        {/* <NumberInput source="roleId" /> */}
      </SimpleForm>
    </Create>
  )
}
