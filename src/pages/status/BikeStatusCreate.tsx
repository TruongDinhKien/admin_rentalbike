import { BackToListBtn } from '@/components'

import { Create, DeleteButton, SelectInput, SimpleForm, TextInput, required, useTranslate } from 'react-admin'

export const BikeStatusCreate = () => {
  const translate = useTranslate()
  const options = [
    { id: translate('resources.bike.active'), label: translate('resources.bike.active') },
    { id: translate('resources.bike.inActive'), label: translate('resources.bike.inActive') },
  ]
  return (
    <Create actions={<BackToListBtn />}>
      <SimpleForm>
        <SelectInput
          label="resources.bike.statusName"
          source="name"
          validate={[required()]}
          optionValue="id"
          optionText="label"
          choices={options}
        />
      </SimpleForm>
    </Create>
  )
}
