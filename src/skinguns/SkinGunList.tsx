import React from 'react'
import { ChipField, Datagrid, DeleteButton, EditButton, FunctionField, List, ShowButton, TextField } from 'react-admin'

export const SkinGunList = () => {
  return (
    <div>
      <List>
        <Datagrid>
          <TextField source="id" textAlign="center" />
          <TextField source="name" textAlign="center" />
          <TextField source="original" textAlign="center" />
          <TextField source="type" textAlign="center" />
          <ChipField style={{ backgroundColor: 'lightgreen', borderRadius: '50px' }} source="status" />
          <FunctionField
            source="assets"
            label="Image"
            render={(record: any) =>
              record.assets.map((url: any) => {
                return <img style={{ height: '125px', width: '125px', borderRadius: '50%' }} src={url} />
              })
            }
          />{' '}
          <EditButton />
          <ShowButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </div>
  )
}
