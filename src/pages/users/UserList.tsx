import { Datagrid, DeleteButton, EditButton, List, NumberField, TextField } from 'react-admin'

export const UserList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <TextField label="resources.user.email" source="email" />
        <TextField label="resources.user.phone" source="phoneNumber" />
        <TextField label="resources.user.firstName" source="firstName" />
        <TextField label="resources.user.lastName" source="lastName" />
        {/* <NumberField source="roleId" /> */}
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
