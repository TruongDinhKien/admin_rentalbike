import { Create, ListButton, SimpleForm, TextInput, TopToolbar, required } from 'react-admin'

const ActionButton = () => {
  return (
    <div>
      <TopToolbar>
        <ListButton />
      </TopToolbar>
    </div>
  )
}
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
