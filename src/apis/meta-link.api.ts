import axios from 'axios'
import { storage } from '../provider'
import { BASE_URL, MetaLinkTypes } from '@/constants'
import _ from 'lodash'

export const uploadFiles = async (bucket: string, type = MetaLinkTypes.COMMON_LINK, data: any) => {
  const user = storage && storage.load('auth')
  const token = _.get(user, 'token')

  const res = await axios({
    method: 'POST',
    url: `${BASE_URL}/meta-links/${bucket}/asyncUpload?type=${type}`,
    data,
    headers: {
      Authorization: `${token.type} ${token.value}`,
    },
  })
  return res
}
