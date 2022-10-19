import {
  CheckCircledIcon,
  CrossCircledIcon,
  UploadIcon,
} from "@radix-ui/react-icons"
import { PHOTO_BASE_SIZE } from "data/photo"
import { useDropzone } from "react-dropzone"

interface DropzoneProps {
  onDropAccepted: (acceptedFiles: File[]) => void
}

const Dropzone = (props: DropzoneProps) => {
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    maxFiles: 1,
    onDropAccepted: props.onDropAccepted,
  })

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      className={`transition flex w-full h-full flex-col justify-center items-center border-opacity-20 border-[2px] p-[25px] text-white rounded-md hover:border-opacity-50 hover:cursor-pointer hover:bg-gray-800 ${
        isDragAccept
          ? "border-opacity-100 text-opacity-100 bg-green-900 bg-opacity-20 border-green-400 !text-green-400"
          : "border-dashed"
      } ${
        isDragReject
          ? "border-red-400 border-opacity-100 !bg-red-900 !bg-opacity-20 !text-red-400 cursor-no-drop border-solid"
          : "border-dashed border-white border-opacity-20"
      }`}
      style={{
        width: `${PHOTO_BASE_SIZE}px`,
        height: `${PHOTO_BASE_SIZE}px`,
      }}
    >
      <input
        {...getInputProps()}
        className={`w-full h-full ${isDragReject ? "!cursor-not-allowed" : ""}`}
      />
      {!isDragActive && <UploadIcon width={18} height={18} />}
      {isDragAccept && <CheckCircledIcon width={18} height={18} />}
      {isDragReject && <CrossCircledIcon width={18} height={18} />}
      <p className="text-md my-[12px]">
        {!isDragActive && `Tarik foto ke sini atau klik untuk mulai mengedit`}
        {isDragAccept && `Foto dapat diunggah`}
        {isDragReject && `Hanya mendukung .png, .jpg, dan .jpeg`}
      </p>
    </div>
  )
}

export default Dropzone
