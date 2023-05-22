import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'

const actionButton = () => {}

export const BikeList = () => {
  return (
    <List bulkActionButtons={false}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="description" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
