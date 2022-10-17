import Download from "components/Download"
import { IMAGE_RATIO_OPTIONS, IMAGE_SCALER_FACTOR } from "data/editor"
import { useRef, useState } from "react"
import { Image, Ratio } from "types"

interface EditorProps {
  image: Image[]
}

const Editor = (props: EditorProps) => {
  const { image } = props
  const ref = useRef<HTMLImageElement>(null)
  const [currentRatio, setCurrentRatio] = useState<Ratio>(
    IMAGE_RATIO_OPTIONS[0]
  )

  const handleRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRatio = IMAGE_RATIO_OPTIONS.find(
      (ratio: Ratio) => ratio.value === e.target.value
    )
    setCurrentRatio(selectedRatio as Ratio)
  }
  return (
    <>
      {image.length > 0 && (
        <div className="flex flex-col align-center">
          <div
            ref={ref}
            className={`relative object-cover`}
            style={{
              width: `${currentRatio.width * IMAGE_SCALER_FACTOR}px`,
              height: `${currentRatio.height * IMAGE_SCALER_FACTOR}px`,
              background: `url(${image[0].src})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <select
            value={currentRatio.value}
            onChange={handleRatioChange}
            className="text-black"
          >
            {IMAGE_RATIO_OPTIONS.map((ratio_option) => (
              <option key={ratio_option.id} value={ratio_option.value}>
                {ratio_option.label}
              </option>
            ))}
          </select>
          <Download passRef={ref} fileName={image[0].name} />
        </div>
      )}
    </>
  )
}

export default Editor
