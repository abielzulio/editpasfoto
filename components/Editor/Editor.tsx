import Download from "components/Download"
import {
  BASE_SIZE,
  IMAGE_RATIO_OPTIONS,
  IMAGE_SCALER_FACTOR,
} from "data/editor"
import {
  OUTER_OPTIONS,
  OUTER_SCALE_DEFAULT,
  OUTER_SCALE_MAX,
  OUTER_SCALE_MIN,
  OUTER_SCALE_STEP,
  OUTER_X_AXIS_DEFAULT,
  OUTER_X_AXIS_MAX,
  OUTER_X_AXIS_MIN,
  OUTER_X_AXIS_STEP,
  OUTER_Y_AXIS_DEFAULT,
  OUTER_Y_AXIS_MAX,
  OUTER_Y_AXIS_MIN,
  OUTER_Y_AXIS_STEP,
} from "data/outer"
import { Dispatch, SetStateAction, useRef, useState } from "react"
import { Image, Outer, Ratio } from "types"

interface EditorProps {
  image: Image[]
  resetImage: Dispatch<SetStateAction<Image[]>>
}

const Editor = (props: EditorProps) => {
  const { image, resetImage } = props

  const ref = useRef<HTMLImageElement>(null)

  const [currentRatio, setCurrentRatio] = useState<Ratio>(
    IMAGE_RATIO_OPTIONS[0]
  )
  const [currentOuter, setCurrentOuter] = useState<Outer>(OUTER_OPTIONS[0])

  const [outerYAxis, setOuterYAxis] = useState<number>(OUTER_Y_AXIS_DEFAULT)
  const [outerXAxis, setOuterXAxis] = useState<number>(OUTER_X_AXIS_DEFAULT)
  const [outerScale, setOuterScale] = useState<number>(OUTER_SCALE_DEFAULT)

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
        <div className="grid grid-cols-2 align-center">
          <div
            className="flex flex-col relative bg-blue-900 justify-center items-center"
            style={{
              width: `${BASE_SIZE * IMAGE_SCALER_FACTOR}px`,
              height: `${BASE_SIZE * IMAGE_SCALER_FACTOR}px`,
            }}
          >
            <div
              ref={ref}
              className={`relative object-cover overflow-hidden`}
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
                style={{
                  marginTop: `${outerYAxis}px`,
                  left: `${outerXAxis}px`,
                  transform: `scale(${outerScale})`,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <select
              value={currentRatio.value}
              onChange={handleRatioChange}
              className="text-black my-10"
            >
              {IMAGE_RATIO_OPTIONS.map((ratio_option) => (
                <option key={ratio_option.id} value={ratio_option.value}>
                  {ratio_option.value}
                </option>
              ))}
            </select>
            <select
              value={currentOuter.value}
              onChange={handleOuterChange}
              className="text-black mb-10"
            >
              {OUTER_OPTIONS.map((outer_option) => (
                <option key={outer_option.id} value={outer_option.value}>
                  {outer_option.value}
                </option>
              ))}
            </select>
            <div className="flex justify-between">
              <p>Posisi Vertikal Outer</p>
              <button onClick={() => setOuterYAxis(OUTER_Y_AXIS_DEFAULT)}>
                reset
              </button>
            </div>
            <input
              type="range"
              min={OUTER_Y_AXIS_MIN}
              max={OUTER_Y_AXIS_MAX}
              step={OUTER_Y_AXIS_STEP}
              onChange={(e) => setOuterYAxis(Number(e.target.value))}
              value={outerYAxis}
            />
            <div className="flex justify-between">
              <p>Posisi Horizontal Outer</p>
              <button onClick={() => setOuterXAxis(OUTER_X_AXIS_DEFAULT)}>
                reset
              </button>
            </div>
            <input
              type="range"
              min={OUTER_X_AXIS_MIN}
              max={OUTER_X_AXIS_MAX}
              step={OUTER_X_AXIS_STEP}
              onChange={(e) => setOuterXAxis(Number(e.target.value))}
              value={outerXAxis}
            />
            <div className="flex justify-between">
              <p>Perbesar outer</p>
              <button onClick={() => setOuterScale(OUTER_SCALE_DEFAULT)}>
                reset
              </button>
            </div>
            <input
              type="range"
              min={OUTER_SCALE_MIN}
              max={OUTER_SCALE_MAX}
              step={OUTER_SCALE_STEP}
              onChange={(e) => setOuterScale(Number(e.target.value))}
              value={outerScale}
            />
            <Download passRef={ref} fileName={image[0].name} />
            <button onClick={() => resetImage([])}>hapus foto</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Editor
