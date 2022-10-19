import Download from "components/Download"
import {
  PHOTO_BASE_SIZE,
  PHOTO_RATIO_OPTIONS,
  PHOTO_SCALE_DEFAULT,
  PHOTO_SCALE_MAX,
  PHOTO_SCALE_MIN,
  PHOTO_SCALE_STEP,
  PHOTO_X_AXIS_DEFAULT,
  PHOTO_X_AXIS_MAX,
  PHOTO_X_AXIS_MIN,
  PHOTO_X_AXIS_STEP,
  PHOTO_Y_AXIS_DEFAULT,
  PHOTO_Y_AXIS_MAX,
  PHOTO_Y_AXIS_MIN,
  PHOTO_Y_AXIS_STEP,
} from "data/photo"
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
import NextImage from "next/image"
import { COPY_NO_UPLOAD } from "data/copy"

interface ToolProps {
  image: Image[]
  resetImage: Dispatch<SetStateAction<Image[]>>
}

const Tool = (props: ToolProps) => {
  const { image, resetImage } = props

  const ref = useRef<HTMLImageElement>(null)

  const [currentRatio, setCurrentRatio] = useState<Ratio>(
    PHOTO_RATIO_OPTIONS[0]
  )
  const [currentOuter, setCurrentOuter] = useState<Outer>(OUTER_OPTIONS[0])

  const [photoXAxis, setPhotoXAxis] = useState<number>(PHOTO_X_AXIS_DEFAULT)
  const [photoYAxis, setPhotoYAxis] = useState<number>(PHOTO_Y_AXIS_DEFAULT)
  const [photoScale, setPhotoScale] = useState<number>(PHOTO_SCALE_DEFAULT)

  const [outerYAxis, setOuterYAxis] = useState<number>(OUTER_Y_AXIS_DEFAULT)
  const [outerXAxis, setOuterXAxis] = useState<number>(OUTER_X_AXIS_DEFAULT)
  const [outerScale, setOuterScale] = useState<number>(OUTER_SCALE_DEFAULT)

  const handleRatioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRatio = PHOTO_RATIO_OPTIONS.find(
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
        <div className="w-fit h-fit my-auto flex flex-col md:gap-[30px] gap-[20px] text-white text-sm overflow-hidden relative">
          <div
            className="flex flex-col relative justify-center text-opacity-80 items-center bg-gray-900 overflow-hidden my-auto rounded-lg mx-auto"
            style={{
              maxWidth: `${PHOTO_BASE_SIZE}px`,
              maxHeight: `${PHOTO_BASE_SIZE}px`,
            }}
          >
            <div
              ref={ref}
              className={`relative overflow-hidden`}
              style={{
                width: `${currentRatio.width}px`,
                height: `${currentRatio.height}px`,
                background: `url(${image[0]?.src})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: `${photoXAxis}px`,
                backgroundPositionY: `${photoYAxis}px`,
                backgroundSize: `${photoScale * 100}%`,
              }}
            >
              <div
                className="w-full h-full absolute"
                style={{
                  marginTop: `${outerYAxis}px`,
                  left: `${outerXAxis}px`,
                  transform: `scale(${outerScale})`,
                }}
              >
                <NextImage
                  src={currentOuter.src}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => resetImage([])}
            className="opacity-50 text-sm hover:opacity-80 transition-opacity text-center"
          >
            Ubah foto
          </button>
          <i className="text-sm opacity-30">{COPY_NO_UPLOAD}</i>
        </div>
      )}
      <div
        className={`${
          image.length > 0
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-25 cursor-not-allowed"
        } flex flex-col gap-[30px] text-white text-opacity-80 text-sm`}
      >
        <Input.Root className="flex-row justify-between gap-[20px]">
          <Input.Title className="text-left whitespace-nowrap">
            Rasio Foto
          </Input.Title>
          <Input.Select
            value={currentRatio.value}
            onChange={handleRatioChange}
            options={PHOTO_RATIO_OPTIONS}
          />
        </Input.Root>
        <Input.Root>
          <div className="flex justify-between">
            <Input.Title>Posisi Vertikal Foto</Input.Title>
            <Input.Reset
              resetDefault={setPhotoYAxis}
              defaultValue={PHOTO_Y_AXIS_DEFAULT}
              currentValue={photoYAxis}
            />
          </div>
          <Input.Slider
            min={PHOTO_Y_AXIS_MIN}
            max={PHOTO_Y_AXIS_MAX}
            step={PHOTO_Y_AXIS_STEP}
            value={photoYAxis}
            type="vertical"
            onChange={(e) => setPhotoYAxis(Number(e.target.value))}
          />
        </Input.Root>
        <Input.Root>
          <div className="flex justify-between">
            <Input.Title>Posisi Horizontal Outer</Input.Title>
            <Input.Reset
              resetDefault={setPhotoXAxis}
              defaultValue={PHOTO_X_AXIS_DEFAULT}
              currentValue={photoXAxis}
            />
          </div>
          <Input.Slider
            min={PHOTO_X_AXIS_MIN}
            max={PHOTO_X_AXIS_MAX}
            step={PHOTO_X_AXIS_STEP}
            value={photoXAxis}
            type="horizontal"
            onChange={(e) => setPhotoXAxis(Number(e.target.value))}
          />
        </Input.Root>
        <Input.Root>
          <div className="flex justify-between">
            <Input.Title>Perbesar Foto</Input.Title>
            <Input.Reset
              resetDefault={setPhotoScale}
              defaultValue={PHOTO_SCALE_DEFAULT}
              currentValue={photoScale}
            />
          </div>
          <Input.Slider
            min={PHOTO_SCALE_MIN}
            max={PHOTO_SCALE_MAX}
            step={PHOTO_SCALE_STEP}
            value={photoScale}
            type="scale"
            onChange={(e) => setPhotoScale(Number(e.target.value))}
          />
        </Input.Root>
        <Input.Root className="flex-row justify-between gap-[20px]">
          <Input.Title className="text-left whitespace-nowrap">
            Tipe Outer
          </Input.Title>
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
              currentValue={outerYAxis}
            />
          </div>
          <Input.Slider
            min={OUTER_Y_AXIS_MIN}
            max={OUTER_Y_AXIS_MAX}
            step={OUTER_Y_AXIS_STEP}
            value={outerYAxis}
            type="vertical"
            onChange={(e) => setOuterYAxis(Number(e.target.value))}
          />
        </Input.Root>
        <Input.Root>
          <div className="flex justify-between">
            <Input.Title>Posisi Horizontal Outer</Input.Title>
            <Input.Reset
              resetDefault={setOuterXAxis}
              defaultValue={OUTER_X_AXIS_DEFAULT}
              currentValue={outerXAxis}
            />
          </div>
          <Input.Slider
            min={OUTER_X_AXIS_MIN}
            max={OUTER_X_AXIS_MAX}
            step={OUTER_X_AXIS_STEP}
            value={outerXAxis}
            type="horizontal"
            onChange={(e) => setOuterXAxis(Number(e.target.value))}
          />
        </Input.Root>
        <Input.Root>
          <div className="flex justify-between">
            <Input.Title>Perbesar Outer</Input.Title>
            <Input.Reset
              resetDefault={setOuterScale}
              defaultValue={OUTER_SCALE_DEFAULT}
              currentValue={outerScale}
            />
          </div>
          <Input.Slider
            min={OUTER_SCALE_MIN}
            max={OUTER_SCALE_MAX}
            step={OUTER_SCALE_STEP}
            value={outerScale}
            type="scale"
            onChange={(e) => setOuterScale(Number(e.target.value))}
          />
        </Input.Root>
        {image.length > 0 && (
          <div className="flex my-[20px] mx-auto">
            <Download passRef={ref} fileName={image[0]?.name} />
          </div>
        )}
      </div>
    </>
  )
}

export default Tool
