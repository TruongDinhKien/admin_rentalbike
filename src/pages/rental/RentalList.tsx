import { ReferenceField } from '@/components/ReferenceField'
import { BooleanField, Datagrid, DateField, DeleteButton, EditButton, FunctionField, List } from 'react-admin'

export const RentalList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <FunctionField
          label="resources.rental.userName"
          render={(v: any) => {
            return <ReferenceField label="User" source="userId" reference={'users'} field="email" />
          }}
        />
        <FunctionField
          label="resources.rental.bikeName"
          render={(v: any) => {
            return <ReferenceField label="Bike" source="bikeId" reference={'bikes'} field="name" />
          }}
        />
        <DateField label="resources.rental.startTime" source="startTime" />
        <DateField label="resources.rental.endTime" source="endTime" />
        <BooleanField label="resources.rental.status" source="status" />
        {/* <FunctionField
          label="resources.rental.revenue"
          render={(v: any) => {
            return <ReferenceField label="User" source="userId" reference={'users'} field="email" />
          }}
        /> */}
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
