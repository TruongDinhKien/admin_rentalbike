import { useState } from 'react'
import { FunctionField } from 'react-admin'

export const useImageUpload = () => {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null)
  const [loading, setLoading] = useState(false)
  // https://res.cloudinary.com/dwcu0t4yu/image/upload/v1685069077/+ url
  const uploadImage = async () => {
    setLoading(true)

    const data = new FormData()
    console.log(image, process.env.REACT_APP_CLOUDINARY_CLOUD_NAME, process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    if (!image || !process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || !process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
      return
    data.append('file', image)
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME)
    data.append('folder', 'Cloudinary-React')

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: data,
        },
      )
      const res = await response.json()
      return res.public_id
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const handleImageChange = (event: any) => {
    const file = event.target.files[0]
    setImage(file)

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      setPreview(reader?.result)
    }
  }

  const handleResetClick = () => {
    setPreview(null)
    setImage(null)
  }

  return {
    ImageUpload: ({ source }: { source: string }) => {
      console.log(process.env.BASE_IMG_CLOUD,'ab');
      return (
        <div className="m-3 position-relative">
          <input
            type="file"
            className="positon-absolute w-100 h-100 cursor-pointer opacity-0"
            onChange={handleImageChange}
            accept="image/*"
          />
          <br></br>
          {preview ? (
            <img src={preview as string} width={200} alt="preview" />
          ) : (
            <FunctionField
              label={`resources.user.${source}`}
              source={source}
              render={(record: any) => (
                <img src={`${process.env.REACT_APP_BASE_IMG_CLOUD}/${record.avatarUrl}`} alt="Avatar" style={{ width: 200 }} />
              )}
            />
          )}
        </div>
      )
    },
    onUpdateImg: uploadImage,
    loading,
    isUpload: !!image,
    handleResetClick,
  }
}
