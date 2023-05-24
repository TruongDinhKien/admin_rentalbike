import { Button, Stack } from '@mui/material'
import React from 'react'
import { Datagrid, DeleteButton, List, TextField } from 'react-admin'

export const BikeStatus = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <TextField source="name" />
        <DeleteButton sx={{ marginLeft: '80%' }} />
      </Datagrid>
    </List>
  )
}
