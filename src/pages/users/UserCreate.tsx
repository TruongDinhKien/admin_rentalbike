import { ActionButton } from '@/components'
import { Create, NumberInput, SimpleForm, TextInput, required } from 'react-admin'

export const UserCreate = () => {

  return (
    <Create actions={<ActionButton />}>
      <SimpleForm>
        <TextInput source="email" validate={[required()]} label="Email"  />
        <TextInput source="phoneNumber" />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        {/* <NumberInput source="roleId" /> */}
      </SimpleForm>
    </Create>
  )
}
