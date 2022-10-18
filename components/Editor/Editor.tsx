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
import * as Input from "components/Input"

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
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] align-center text-white text-opacity-80 text-sm">
          <div
            className="flex flex-col relative justify-center items-center bg-gray-900 rounded-xl"
            style={{
              width: `${BASE_SIZE * IMAGE_SCALER_FACTOR}px`,
              height: `100%`,
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
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <Input.Root>
              <Input.Title>Ubah Rasio Foto</Input.Title>
              <Input.Select
                value={currentRatio.value}
                onChange={handleRatioChange}
                options={IMAGE_RATIO_OPTIONS}
              />
            </Input.Root>
            <Input.Root>
              <Input.Title>Ubah Rasio Foto</Input.Title>
              <Input.Select
                value={currentOuter.value}
                onChange={handleOuterChange}
                options={OUTER_OPTIONS}
              />
            </Input.Root>
            <Input.Root>
              <div className="flex justify-between">
                <Input.Title>Posisi Vertikal Outer</Input.Title>
                <Input.Reset
                  resetDefault={setOuterYAxis}
                  defaultValue={OUTER_Y_AXIS_DEFAULT}
                />
              </div>
              <Input.Slider
                min={OUTER_Y_AXIS_MIN}
                max={OUTER_Y_AXIS_MAX}
                step={OUTER_Y_AXIS_STEP}
                value={outerYAxis}
                onChange={(e) => setOuterYAxis(Number(e.target.value))}
              />
            </Input.Root>
            <Input.Root>
              <div className="flex justify-between">
                <Input.Title>Posisi Horizontal Outer</Input.Title>
                <Input.Reset
                  resetDefault={setOuterXAxis}
                  defaultValue={OUTER_X_AXIS_DEFAULT}
                />
              </div>
              <Input.Slider
                min={OUTER_X_AXIS_MIN}
                max={OUTER_X_AXIS_MAX}
                step={OUTER_X_AXIS_STEP}
                value={outerXAxis}
                onChange={(e) => setOuterXAxis(Number(e.target.value))}
              />
            </Input.Root>
            <Input.Root>
              <div className="flex justify-between">
                <Input.Title>Perbesar Outer</Input.Title>
                <Input.Reset
                  resetDefault={setOuterScale}
                  defaultValue={OUTER_SCALE_DEFAULT}
                />
              </div>
              <Input.Slider
                min={OUTER_SCALE_MIN}
                max={OUTER_SCALE_MAX}
                step={OUTER_SCALE_STEP}
                value={outerScale}
                onChange={(e) => setOuterScale(Number(e.target.value))}
              />
            </Input.Root>
            <div className="flex gap-[20px] mx-auto">
              <button
                onClick={() => resetImage([])}
                className="opacity-50 hover:opacity-80"
              >
                Ganti foto
              </button>
              <Download passRef={ref} fileName={image[0].name} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Editor
