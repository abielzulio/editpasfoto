import Download from "components/Download"
import { IMAGE_RATIO_OPTIONS, IMAGE_SCALER_FACTOR } from "data/editor"
import { OUTER_OPTIONS } from "data/outer"
import { useRef, useState } from "react"
import { Image, Outer, Ratio } from "types"

interface EditorProps {
  image: Image[]
}

const Editor = (props: EditorProps) => {
  const { image } = props
  const ref = useRef<HTMLImageElement>(null)
  const [currentRatio, setCurrentRatio] = useState<Ratio>(
    IMAGE_RATIO_OPTIONS[0]
  )
  const [currentOuter, setCurrentOuter] = useState<Outer>(OUTER_OPTIONS[0])

  const handleRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRatio = IMAGE_RATIO_OPTIONS.find(
      (ratio: Ratio) => ratio.value === e.target.value
    )
    setCurrentRatio(selectedRatio as Ratio)
  }

  const handleOuterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOuter = OUTER_OPTIONS.find(
      (outer: Outer) => outer.value === e.target.value
    )
    setCurrentOuter(selectedOuter as Outer)
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
          >
            <img
              src={currentOuter.src}
              alt={currentOuter.value}
              className="w-full h-full absolute"
            />
          </div>
          <select
            value={currentRatio.value}
            onChange={handleRatioChange}
            className="text-black my-10 mx-auto"
          >
            {IMAGE_RATIO_OPTIONS.map((ratio_option) => (
              <option key={ratio_option.id} value={ratio_option.value}>
                {ratio_option.label}
              </option>
            ))}
          </select>
          <select
            value={currentOuter.value}
            onChange={handleOuterChange}
            className="text-black mb-10 mx-auto"
          >
            {OUTER_OPTIONS.map((outer_option) => (
              <option key={outer_option.id} value={outer_option.value}>
                {outer_option.value}
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
