import { dataProvider } from '@/provider'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { FunctionField, Show, SimpleShowLayout, TextField, TextInput, useRecordContext } from 'react-admin'
import { useParams } from 'react-router'
import * as api from '../apis/user.api'

const fetchUserProfile = async (id: number) => {
  const response: any = await dataProvider('REMOTE', `users`, {
    method: `${id}`,
    requestMethod: 'GET',
  })
  return response
}

export const UserDetail = () => {
  const params = useParams()
  const userId = Number(params.id)

  useEffect(() => {
    if (params.id) {
      fetchUserProfile(userId)
    }
  }, [params.id])

  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="email"></TextField>
        <TextField source="phone"></TextField>
        <TextField source="username"></TextField>
      </SimpleShowLayout>
    </Show>
  )
}
