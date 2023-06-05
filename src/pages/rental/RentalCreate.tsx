import { BackToListBtn } from '@/components'
import {
  BooleanInput,
  Create,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  required,
  useTranslate,
} from 'react-admin'

export const RentalCreate = () => {
  const translate = useTranslate()

  const options = [
    { id: 'awaiting', label: 'awaiting' },
    { id: 'renting', label: 'renting' },
    { id: 'returned', label: 'returned' },
  ]
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
    </Create>
  )
}
