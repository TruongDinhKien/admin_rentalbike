import { ReferenceField } from '@/components/ReferenceField'
import { Chip } from '@mui/material'
import { Datagrid, DeleteButton, EditButton, FunctionField, List, TextField } from 'react-admin'

export const BikeList = () => {
  return (
    <List sort={{ field: 'name', order: 'DESC' }}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="name" />
        <TextField source="description" />
        <FunctionField
          render={(v: any) => {
            return <ReferenceField label="status" source="bikestatusId" reference={'bikestatuses'} field="name" />
          }}
        />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
