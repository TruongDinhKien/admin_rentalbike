import { ActionButton } from '@/components'
import _ from 'lodash'
import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from 'react-admin'

export const BikeEdit = () => {
  const transformData = (data: any) => {
    let value = _.omit(data, ['id', 'imgUrl'])
    value = _.omitBy(value, val => val === null)
    value = { ...value }
    return value
  }

  return (
    <Edit transform={transformData} actions={<ActionButton />}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" fullWidth />
        <TextInput source="name" validate={required()} fullWidth />
        <TextInput multiline source="description" validate={required()} fullWidth />
        <ReferenceInput source="bikestatusId" reference="bikestatuses">
          <SelectInput label="Status" sx={{ width: '15%' }} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
