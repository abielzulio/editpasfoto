import { IMAGE_RATIO_OPTIONS, IMAGE_SCALER_FACTOR } from "data/editor"
import { useState } from "react"
import { Image, Ratio } from "types"

interface EditorProps {
  image: Image[]
}

const Editor = (props: EditorProps) => {
  const { image } = props
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
        <div
          className={`w-[${currentRatio.width * IMAGE_SCALER_FACTOR}px] h-[${
            currentRatio.height * IMAGE_SCALER_FACTOR
          }px] relative object-cover`}
        >
          <img
            src={image[0].src}
            width={currentRatio.width * IMAGE_SCALER_FACTOR}
            height={currentRatio.height * IMAGE_SCALER_FACTOR}
            className={`w-[${currentRatio.width * IMAGE_SCALER_FACTOR}px] h-[${
              currentRatio.height * IMAGE_SCALER_FACTOR
            }px] object-cover`}
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
        </div>
      )}
    </>
  )
}

export default Editor
