import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { useState } from "react"
import { Image } from "types"
import Editor from "components/Editor"

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
    acceptedFiles,
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
    <section className="h-min my-[100px] mx-auto">
      <aside
        className={`border-opacity-25 border-[2px] p-[25px] text-white ${
          isDragAccept ? "border-opacity-100" : ""
        } ${
          isDragReject
            ? "border-red-900 border-opacity-100 !text-red-900 hover:!cursor-no-drop"
            : "border-white"
        }`}
      >
        {image.length > 0 ? (
          <>
            <Editor image={image} />
            <button onClick={(e) => setImage([])}>hapus foto</button>
          </>
        ) : (
          <div {...getRootProps({ className: "dropzone" })}>
            <input
              {...getInputProps()}
              className={`${isDragReject ? "cursor-not-allowed" : ""}`}
            />
            {isDragAccept && <p>Foto dapat diunggah</p>}
            {isDragReject && (
              <p>Hanya mendukung jenis file .png, .jpg, dan .jpeg.</p>
            )}
            {!isDragActive && (
              <p>Tarik atau klik untuk unggah foto (.png, .jpg, dan .jpeg)</p>
            )}
          </div>
        )}
      </aside>
    </section>
  )
}

export default Dropzone
