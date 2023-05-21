import React from 'react'
import { Datagrid, List, RichTextField, TextField } from 'react-admin'

export const BikeList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="name" />
        <RichTextField source="description" />
      </Datagrid>
    </List>
  )
}
