import { ActionButton } from '@/components'
import _ from 'lodash'
import {
  BooleanInput,
  DateTimeInput,
  Edit,
  FunctionField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  NumberInput,
  required,
} from 'react-admin'

export const RentalEdit = () => {
  const options = [
    { id: 'awaiting', label: 'awaiting' },
    { id: 'renting', label: 'renting' },
    { id: 'returned', label: 'returned' },
  ]
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
        <NumberInput source="amount" label="resources.rental.amount" />
        <DateTimeInput label="resources.rental.startTime" source="startTime" />
        <DateTimeInput label="resources.rental.endTime" source="endTime" />
        <SelectInput
          label="resources.rental.status"
          source="status"
          validate={[required()]}
          optionValue="id"
          optionText="label"
          choices={options}
        />
      </SimpleForm>
    </Edit>
  )
}
