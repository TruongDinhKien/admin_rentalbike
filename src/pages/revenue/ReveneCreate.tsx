import { BackToListBtn } from '@/components'
import { BooleanInput, Create, DateTimeInput, NumberInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin'

export const ReveneCreate = () => {
  return (
    <Create actions={<BackToListBtn />}>
      <SimpleForm>
        <ReferenceInput source="rentalId" reference="rentals">
          <SelectInput
            label="resources.revenue.rental"
            sx={{ width: '15%' }}
            // optionText={(record: any) => <span>{record.email}</span>}
          />
        </ReferenceInput>

        <NumberInput label="resources.revenue.amount" source="amount" />
        <DateTimeInput label="resources.revenue.date" source="date" />
      </SimpleForm>
    </Create>
  )
}
