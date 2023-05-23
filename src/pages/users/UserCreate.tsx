import { ActionButton } from '@/components'
import { Create, SimpleForm, TextInput, required } from 'react-admin'

export const UserCreate = () => {

  return (
    <Create actions={<ActionButton />}>
      <SimpleForm>
        <TextInput source="email" validate={[required()]} label="Email"  />
        <TextInput source="firstName"/>
        <TextInput source="firstName"/>
        <TextInput source="firstName"/>
      </SimpleForm>
    </Create>
  )
}
