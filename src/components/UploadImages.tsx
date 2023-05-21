import { upload } from '@/provider'
import _ from 'lodash'
import { UploadImagesToServer } from '../apis/upload.api'

export const UploadImages = async (imageFiles: any) => {
  const data = new FormData()
  const images: any = []
  // console.log('image co o day k', imageFiles)

  if (!_.isEmpty(imageFiles)) {
    if (!Array.isArray(imageFiles)) {
      if (imageFiles.rawFile) {
        data.append('files', imageFiles.rawFile)
      } else {
        images.push(imageFiles)
      }
    } else {
      for (const image of imageFiles) {
        if (image.rawFile) {
          data.append('files', image.rawFile)
        } else {
          images.push(image)
        }
      }
    }
    // console.log('check data ----->', data)
    if (!data.has('files')) return images
    const res: any = await UploadImagesToServer(data)
    // console.log('check res in uploadimages ----->', res)
    // const uploadedImages = res.data
    // console.log('check res uploadimage ----->', uploadedImages)
    // if (!_.isEmpty(res)) {
    //   return [...images, ...uploadedImages]
    // }
    return res
  }
  return images
}

export const UploadImagesFile = async (file: any) => {
  try {
    const data = new FormData()
    data.append('files', file)
    const res = await UploadImagesToServer(data)
    if (res && res.data) {
      return _.get(res, 'data.0', {})
    }
  } catch (e: any) {
    console.log('Erros in upload image ====>', e.message)
  }
}
