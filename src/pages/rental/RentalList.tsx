import { ReferenceField } from '@/components/ReferenceField'
import React from 'react'
import { BooleanField, Datagrid, DateField, FunctionField, List, TextField } from 'react-admin'

export const RentalList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <FunctionField
          label="User"
          render={(v: any) => {
            return <ReferenceField label="User" source="userId" reference={'users'} field="email" />
          }}
        />
        <FunctionField
          label="Bike name"
          render={(v: any) => {
            return <ReferenceField label="Bike" source="bikeId" reference={'bikes'} field="name" />
          }}
        />
        <DateField source="startTime" />
        <DateField source="endTime" />
        <BooleanField source="status" />
      </Datagrid>
    </List>
  )
}
