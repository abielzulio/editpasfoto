import Dropzone from "components/Dropzone"
import Tool from "components/Tool"
import { useCallback, useState } from "react"
import { Image } from "types"
import { SAMPLE_IMAGE } from "data/editor"
import { COPY_NO_UPLOAD } from "data/copy"

const Editor = (props: React.HTMLAttributes<HTMLElement>) => {
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
    <section
      className={`${props.className} h-min md:w-[700px] w-fit md:mx-auto mx-[30px] grid md:grid-cols-2 grid-cols-1 gap-[30px] relative md:mt-[225px] mt-[175px] mb-[30px] bg-[#1a242d] backdrop-blur-sm bg-opacity-80 p-[25px] border-gray-50 border-[1px] border-opacity-10 rounded-xl shadow-2xl shadow-gray-800`}
    >
      {image.length == 0 && (
        <div className="w-fit max-h-min my-auto flex flex-col md:gap-[30px] gap-[20px] text-white">
          <Dropzone onDropAccepted={onDropAccepted} />
          <button
            onClick={() => setImage(SAMPLE_IMAGE)}
            className="opacity-50 text-sm hover:opacity-80 transition-opacity text-center"
          >
            Gunakan contoh
          </button>
          <i className="text-sm opacity-30">{COPY_NO_UPLOAD}</i>
        </div>
      )}
      <Tool image={image} resetImage={setImage} />
    </section>
  )
}

export default Editor
