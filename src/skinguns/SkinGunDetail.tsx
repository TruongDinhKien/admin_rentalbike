import React from 'react'
import { ChipField, FunctionField, Show, SimpleShowLayout, TextField } from 'react-admin'

export const SkinGunDetail = () => {
  return (
    <div>
      <Show>
        <SimpleShowLayout>
          <TextField source="name" />
          <TextField source="original" />
          <TextField source="type" />
          <ChipField style={{ backgroundColor: 'lightgreen', borderRadius: '50px' }} source="status" />
          <FunctionField
            source="assets"
            label="Image"
            render={(record: any) =>
              record.assets.map((url: any) => {
                return <img style={{ height: '30%', width: '30%', display: 'block', margin: '2%' }} src={url} />
              })
            }
          />{' '}
        </SimpleShowLayout>
      </Show>
    </div>
  )
}
