import { BackToListBtn } from '@/components'
import { BooleanInput, Create, DateTimeInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin'

export const RentalCreate = () => {
  return (
    <Create actions={<BackToListBtn />}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput
            label="resources.rental.userName"
            sx={{ width: '15%' }}
            optionText={(record: any) => <span>{record.email}</span>}
          />
        </ReferenceInput>
        <ReferenceInput source="bikeId" reference="bikes">
          <SelectInput label="resources.rental.bikeName" sx={{ width: '15%' }} />
        </ReferenceInput>
        <DateTimeInput label="resources.rental.startTime" source="startTime" />
        <DateTimeInput label="resources.rental.endTime" source="endTime" />
        <BooleanInput source="status" label="resources.rental.status" />
        {/* <ReferenceInput source="revenueId" reference="revenues">
          <SelectInput sx={{ width: '15%' }} />
        </ReferenceInput> */}
      </SimpleForm>
    </Create>
  )
}
