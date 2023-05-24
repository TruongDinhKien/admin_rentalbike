import { ReferenceField } from '@/components/ReferenceField'
import React from 'react'
import { Datagrid, DateField, FunctionField, List, TextField } from 'react-admin'

export const RentalList = () => {
  return (
    <List>
      <Datagrid bulkActionButtons={false}>
        <FunctionField
          render={(v: any) => {
            return <ReferenceField label="Bike" source="bikeId" reference={'bikes'} field="name" />
          }}
        />
        <DateField source="startTime" />
        <DateField source="endTime" />
      </Datagrid>
    </List>
  )
}
