import Dropzone from "components/Dropzone"
import Tool from "components/Tool"
import { useCallback, useState } from "react"
import { Image } from "types"
import { SAMPLE_IMAGE } from "data/editor"

const Editor = () => {
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

  return (
    <section className="h-min grid md:grid-cols-2 grid-cols-1 gap-[30px] relative my-[40px] mx-auto bg-white bg-opacity-5 p-[25px] border-gray-50 border-[1px] border-opacity-10 rounded-xl">
      {image.length == 0 && (
        <div className="w-min max-h-min my-auto">
          <Dropzone onDropAccepted={onDropAccepted} />
          <button
            onClick={() => setImage(SAMPLE_IMAGE)}
            className="mt-[20px] text-opacity-50 text-white text-sm hover:text-opacity-80 transition-opacity text-center"
          >
            Gunakan contoh
          </button>
        </div>
      )}
      <Tool image={image} resetImage={setImage} />
    </section>
  )
}

export default Editor
