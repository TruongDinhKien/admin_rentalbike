import { dataProvider } from '@/provider'
import { Filter, User, Response } from '@/types.d'

export const fetchUsers = async (filter: Filter<User.Info>) => {
  const response = (await dataProvider('GET_LIST', 'users', {
    ...filter,
  })) as Response<User.Info>
  return response || {}
}

export const fetchUserProfile = async (id: number) => {
  const response = await dataProvider('REMOTE', `users`, {
    method: `${id}`,
    requestMethod: 'GET',
  })
  return response
}
