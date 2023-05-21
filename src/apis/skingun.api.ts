import { dataProvider } from '../provider'

export const uploadImage = async (data: string) => {
  const response = await dataProvider('REMOTE', 'skinguns', {
    requestMethod: 'POST',
    data: data,
  })

  return response
}
