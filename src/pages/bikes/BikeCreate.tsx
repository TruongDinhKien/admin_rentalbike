import { BackToListBtn } from '@/components'
import { FormatCurrencyInput } from '@/components/FormatCurrecnyInput'
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from 'react-admin'

export const BikeCreate = () => {
  return (
    <Create actions={<BackToListBtn />}>
      <SimpleForm>
        <TextInput label="resources.bike.name" source="name" validate={[required()]} />
        <TextInput source="description" multiline={true} label="resources.bike.description" />
        <FormatCurrencyInput
          source="price"
          label="resources.bike.price"
          suffix={` VND`}
          thousandSeparator=","
          required={true}
        />
        <ReferenceInput source="bikestatusId" reference="bikestatuses">
          <SelectInput
            label="resources.bike.status"
            sx={{ width: '12%' }}
            emptyText={'Vui lòng chọn trạng thái của xe'}
          />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
