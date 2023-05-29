import { dataProvider } from '@/provider'
import _ from 'lodash'
import React, { useState } from 'react'
import { BooleanInput, Create, DateTimeInput, ReferenceInput, SelectInput, SimpleForm, useGetList } from 'react-admin'

export const RentalCreate = () => {
  const { data, isLoading } = useGetList('users')

  const newValue = data?.map((it: any) => {
    return it.email
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput sx={{ width: '15%' }} optionText={(record: any) => <span>{record.email}</span>} />
        </ReferenceInput>
        <ReferenceInput source="bikeId" reference="bikes">
          <SelectInput sx={{ width: '15%' }} />
        </ReferenceInput>
        <DateTimeInput source="startTime" />
        <DateTimeInput source="endTime" />
        <BooleanInput source="status" label="Active" />
        {/* <ReferenceInput source="revenueId" reference="revenues">
          <SelectInput sx={{ width: '15%' }} />
        </ReferenceInput> */}
      </SimpleForm>
    </Create>
  )
}
