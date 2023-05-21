import { Edit, SimpleForm, TextInput } from 'react-admin'

export const UserDetail = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="email" disabled={true} />
        <TextInput source="firstName" />
        <TextInput source="lastName" />
        <TextInput source="phoneNumber" />
      </SimpleForm>
    </Edit>
  )
}
