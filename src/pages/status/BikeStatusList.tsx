import { Button, Stack } from '@mui/material'
import React from 'react'
import { Datagrid, DeleteButton, List, TextField } from 'react-admin'

export const BikeStatusList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <TextField label="resources.bike.status" source="name" />
        <DeleteButton sx={{ marginLeft: '80%' }} />
      </Datagrid>
    </List>
  )
}
