import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'

export const EmployeeList = (props: any) => {
  return (
    <List>
      <Datagrid>
        <TextField source="STT" />
        <TextField source="name" />
        <TextField source="birthday" />
        <TextField source="phoneNumber" />
      </Datagrid>
    </List>
  )
}
