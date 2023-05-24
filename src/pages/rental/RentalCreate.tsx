import React from 'react'
import { BooleanInput, Create, DateInput, ReferenceInput, SelectInput, SimpleForm } from 'react-admin'

export const RentalCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput sx={{ width: '15%' }} />
        </ReferenceInput>
        <ReferenceInput source="bikeId" reference="bikes">
          <SelectInput sx={{ width: '15%' }} />
        </ReferenceInput>
        <DateInput source="startTime" />
        <DateInput source="endTime" />
        <BooleanInput source="status" label="Active" />
        {/* <ReferenceInput source="revenueId" reference="revenues">
          <SelectInput sx={{ width: '15%' }} />
        </ReferenceInput> */}
      </SimpleForm>
    </Create>
  )
}
