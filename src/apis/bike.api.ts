import { dataProvider } from '../provider'

export const create = async (data: string) => {
  const response = await dataProvider('REMOTE', 'bikes', {
    requestMethod: 'POST',
    data: data,
  })
  return response
}
