import { ReferenceField } from '@/components/ReferenceField'
import { Datagrid, DeleteButton, EditButton, FunctionField, List, NumberField, TextField } from 'react-admin'

export const BikeList = () => {
  return (
    <List sort={{ field: 'name', order: 'DESC' }}>
      <Datagrid bulkActionButtons={false}>
        <TextField label="resources.bike.name" source="name" />
        <TextField label="resources.bike.description" source="description" />
        <NumberField
          options={{
            style: 'currency',
            currency: 'VND',
          }}
          label="resources.bike.price"
          source="price"
        />
        <FunctionField
          label="resources.bike.status"
          render={(v: any) => {
            return <ReferenceField source="bikestatusId" reference={'bikestatuses'} field="name" />
          }}
        />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
