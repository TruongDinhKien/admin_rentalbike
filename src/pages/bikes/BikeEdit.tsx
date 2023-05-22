import _ from 'lodash'
import { CreateButton, Edit, ListButton, SimpleForm, TextInput, TopToolbar, required } from 'react-admin'

const ActionButton = () => {
  return (
    <div>
      <TopToolbar>
        <ListButton />
        <CreateButton />
      </TopToolbar>
    </div>
  )
}

export const BikeEdit = () => {
  const transformData = (data: any) => {
    let value = _.omit(data, ['id', 'imgUrl', 'bikestatusId'])
    value = _.omitBy(value, val => val === null)
    value = { ...value }
    return value
  }

  return (
    <Edit transform={transformData} actions={<ActionButton />}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="name" validate={required()} />
        <TextInput multiline source="description" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}
