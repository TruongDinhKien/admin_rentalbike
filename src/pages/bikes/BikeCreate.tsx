import { ActionButton } from '@/components'
import { Create, SimpleForm, TextInput, required } from 'react-admin'

export const BikeCreate = () => {
  const choices = [
    { id: '0', name: 'online' },
    { id: '1', name: 'offline' },
  ]

  return (
    <Create actions={<ActionButton />}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="description" multiline={true} label="Bike description" />
        {/* <ReferenceInput source="bikestatusId" reference="bikestatuses">
          <SelectInput choices={choices} />
        </ReferenceInput> */}
      </SimpleForm>
    </Create>
  )
}
