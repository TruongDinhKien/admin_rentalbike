import axios from 'axios'
import { storage } from '../provider'
import _ from 'lodash'

const lbToken = storage.load('lbtoken')
const token = !_.isEmpty(lbToken) ? lbToken.token : null
export const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000/'

export const UploadImagesToServer = async (data: any) => {
  const res = await axios({
    method: 'POST',
    url: `${baseUrl}/files`,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return res
}
