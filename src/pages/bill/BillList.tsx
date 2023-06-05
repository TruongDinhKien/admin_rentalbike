import { ReferenceField } from '@/components/ReferenceField'
import { Datagrid, DateField, DeleteButton, EditButton, FunctionField, List, NumberField } from 'react-admin'

export const BillList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <NumberField label="resources.revenue.amount" source="amount" />
        <DateField label="resources.revenue.date" source="date" />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}
