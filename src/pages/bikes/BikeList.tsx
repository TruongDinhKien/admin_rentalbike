import { Datagrid, FunctionField, List, NumberField, TextField } from 'react-admin'

export const BikeList = () => {
  return (
    <div>
      <List>
        <Datagrid>
          <NumberField source="id" />
          <TextField source="name" />
          <TextField source="description" />
          {/* <FunctionField
            source="imgUrl"
            label="Image"
            render={(record: any) =>
              record.assets.map((url: any) => {
                return <img style={{ height: '125px', width: '125px', borderRadius: '50%' }} src={url} />
              })
            }
          /> */}
          {/* <EditButton />
          <DeleteButton /> */}
        </Datagrid>
      </List>
    </div>
  )
}
