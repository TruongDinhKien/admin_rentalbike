import { Datagrid, DeleteButton, EditButton, List, NumberField, TextField } from 'react-admin'

export const UserList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <TextField source="email" />
        <TextField source="phoneNumber" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        {/* <NumberField source="roleId" /> */}
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
