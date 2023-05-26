import { BackToListBtn } from '@/components'
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from 'react-admin'

export const BikeCreate = () => {
  return (
    <Create actions={<BackToListBtn />}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="description" multiline={true} label="Bike description" />
        <ReferenceInput source="bikestatusId" reference="bikestatuses">
          <SelectInput label="Status" sx={{ width: '15%' }} emptyText={'-- Chọn trạng thái --'} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
