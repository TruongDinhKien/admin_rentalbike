import _ from 'lodash'
import { uploadFiles } from '@/apis'
import { MetaLink } from '@/types.d'

export const upload = async (bucket: string, type: string, files: any) => {
  const data = new FormData()
  const currentFiles: MetaLink[] = []
  if (!_.isEmpty(files)) {
    if (!Array.isArray(files)) {
      files = [files]
    }

    for (const file of files) {
      if (file.rawFile) {
        data.append('files', file.rawFile)
      } else {
        currentFiles.push(file)
      }
    }
    if (!data.has('files')) return currentFiles
    const res = await uploadFiles(bucket, type, data)
    if (!_.isEmpty(res)) {
      const metaLinks = res.data.map((value: MetaLink) => {
        return _.omitBy(value, val => val === null)
      })
      return [...currentFiles, ...metaLinks]
    }
    return currentFiles
  }
  return currentFiles
}
