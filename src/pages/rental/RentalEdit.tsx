import { ActionButton } from '@/components'
import _ from 'lodash'
import { BooleanInput, DateTimeInput, Edit, FunctionField, ReferenceInput, SelectInput, SimpleForm } from 'react-admin'

export const RentalEdit = () => {
  const transformData = (data: any) => {
    let value = _.pick(data, ['bikeId', 'startTime', 'endTime', 'status'])
    return { ...value }
  }

  return (
    <Edit transform={transformData} actions={<ActionButton />}>
      <SimpleForm>
        <FunctionField
          label="resources.rental.userName"
          render={(v: any) => {
            return (
              <ReferenceInput label="User" source="userId" reference={'users'}>
                <SelectInput disabled optionText={(record: any) => <span>{record.email}</span>} />
              </ReferenceInput>
            )
          }}
        />
        <FunctionField
          label="resources.rental.bikeName"
          render={(v: any) => {
            return (
              <ReferenceInput label="Bike" source="bikeId" reference={'bikes'}>
                <SelectInput />
              </ReferenceInput>
            )
          }}
        />
        <DateTimeInput label="resources.rental.startTime" source="startTime" />
        <DateTimeInput label="resources.rental.endTime" source="endTime" />
        <BooleanInput source="status" label="resources.rental.status" />
      </SimpleForm>
    </Edit>
  )
}
