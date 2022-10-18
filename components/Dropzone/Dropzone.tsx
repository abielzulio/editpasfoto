import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { useState } from "react"
import { Image } from "types"
import Editor from "components/Editor"
import { SAMPLE_IMAGE } from "data/editor"

const Dropzone = () => {
  const [image, setImage] = useState<Image[]>([])

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file: File, index: number) => {
      const reader: FileReader = new FileReader()
      reader.onabort = () => console.log("Pembacaan foto dibatalkan")
      reader.onerror = () => console.log("Pembacaan foto gagal")
      reader.onload = () => {
        setImage((prev) => [
          ...prev,
          { id: index, src: reader.result?.toString(), name: file.name },
        ])
      }
      reader.readAsDataURL(file)
      return file
    })
  }, [])

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
    onDropAccepted: onDropAccepted,
  })

  return (
    <section className="h-min my-[100px] mx-auto bg-white bg-opacity-5 p-[25px] border-gray-50 border-[1px] border-opacity-10 rounded-xl">
      {image.length > 0 && <Editor image={image} resetImage={setImage} />}
      {image.length == 0 && (
        <>
          <p className="text-white mb-[25px] text-opacity-80">
            Unggah pas foto
          </p>
          <div
            {...getRootProps({ className: "dropzone" })}
            className={`flex border-opacity-20 border-[2px] p-[25px] text-white w-[150px] h-[200px] rounded-md text-opacity-30 hover:border-opacity-50 hover:cursor-pointer hover:bg-gray-800 hover:text-opacity-100 ${
              isDragAccept
                ? "border-opacity-100 text-opacity-100 bg-gray-800"
                : "border-dashed"
            } ${
              isDragReject
                ? "border-red-900 border-opacity-100 !text-red-900 cursor-no-drop border-solid"
                : "border-dashed border-white border-opacity-20"
            }`}
          >
            <input
              {...getInputProps()}
              className={`w-full h-full ${
                isDragReject ? "cursor-not-allowed" : ""
              }`}
            />
            {isDragReject && (
              <p>Hanya mendukung jenis file .png, .jpg, dan .jpeg.</p>
            )}
            <p className="text-sm my-auto">
              {!isDragActive && `Tarik file atau klik untuk mengunggah`}
              {isDragAccept && `Foto dapat diunggah`}
              {isDragReject &&
                `Hanya mendukung jenis file .png, .jpg, dan .jpeg`}
            </p>
          </div>
          <button
            onClick={() => setImage(SAMPLE_IMAGE)}
            className="mt-[20px] text-opacity-50 text-white text-sm hover:text-opacity-80"
          >
            Lihat contoh
          </button>
        </>
      )}
    </section>
  )
}

export default Dropzone
