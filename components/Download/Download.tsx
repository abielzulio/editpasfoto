import { product } from "data/product"
import { toJpeg, toPng } from "html-to-image"
import { RefObject, useCallback } from "react"

interface DownloadProps {
  passRef: RefObject<HTMLImageElement>
  type?: "png" | "jpeg"
  fileName: string
}

const Download = (props: DownloadProps) => {
  const { passRef, type = "png", fileName } = props
  const onButtonClick = useCallback(() => {
    if (passRef.current === null) {
      return
    }

    if (type === "png") {
      toPng(passRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a")
          link.download = `${fileName} - ${product.url}.png`
          link.href = dataUrl
          link.click()
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    } else {
      toJpeg(passRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a")
          link.download = `${fileName} - ${product.url}.jpeg`
          link.href = dataUrl
          link.click()
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    }
  }, [passRef, type])
  return (
    <button
      onClick={onButtonClick}
      className="rounded-full bg-white text-black mx-auto px-4"
    >
      Download
    </button>
  )
}

export default Download