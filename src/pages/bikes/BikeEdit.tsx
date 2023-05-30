import { ActionButton } from '@/components'
import { FormatCurrencyInput } from '@/components/FormatCurrecnyInput'
import _ from 'lodash'
import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from 'react-admin'

export const BikeEdit = () => {
  const transformData = (data: any) => {
    let value = _.pick(data, ['name', 'description', 'bikestatusId', 'price'])
    console.log(value)
    return { ...value }
  }

  return (
    <Edit transform={transformData} actions={<ActionButton />}>
      <SimpleForm>
        <TextInput disabled label="resources.bike.id" source="id" fullWidth />
        <TextInput label="resources.bike.name" source="name" validate={required()} fullWidth />
        <TextInput multiline label="resources.bike.description" source="description" validate={required()} fullWidth />
        <FormatCurrencyInput
          source="price"
          label="resources.bike.price"
          suffix={` VND`}
          thousandSeparator=","
          required={true}
        />
        <ReferenceInput source="bikestatusId" reference="bikestatuses">
          <SelectInput label="resources.bike.status" sx={{ width: '12%' }} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
