import { ReferenceField } from '@/components/ReferenceField'
import { Datagrid, DateField, DeleteButton, EditButton, FunctionField, List, NumberField } from 'react-admin'

export const BillList = () => {
  return (
    <List sort={{ field: 'name', order: 'DESC' }}>
      <Datagrid bulkActionButtons={false}>
        <FunctionField
          label="resources.revenues.rental"
          render={(v: any) => {
            return <ReferenceField source="rentalId" reference={'rentals'} field="id" />
          }}
        />
        <NumberField label="resources.revenue.amount" source="amount" />
        <DateField label="resources.revenue.date" source="date" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
