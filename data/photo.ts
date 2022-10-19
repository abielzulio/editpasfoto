import { Ratio } from "types"

export const PHOTO_BASE_SIZE: number = 300

export const PHOTO_RATIO_OPTIONS: Ratio[] = [
  {
    id: 1,
    value: "1:1",
    width: (1 / 1) * PHOTO_BASE_SIZE,
    height: PHOTO_BASE_SIZE,
  },
  {
    id: 2,
    value: "2:3",
    width: (2 / 3) * PHOTO_BASE_SIZE,
    height: PHOTO_BASE_SIZE,
  },
  {
    id: 3,
    value: "3:4",
    width: (3 / 4) * PHOTO_BASE_SIZE,
    height: PHOTO_BASE_SIZE,
  },
  {
    id: 4,
    value: "4:5",
    width: (4 / 5) * PHOTO_BASE_SIZE,
    height: PHOTO_BASE_SIZE,
  },
]

export const PHOTO_Y_AXIS_MIN: number = -200
export const PHOTO_Y_AXIS_MAX: number = 200
export const PHOTO_Y_AXIS_STEP: number = 0.05
export const PHOTO_Y_AXIS_DEFAULT: number = 0

export const PHOTO_X_AXIS_MIN: number = -200
export const PHOTO_X_AXIS_MAX: number = 200
export const PHOTO_X_AXIS_STEP: number = 0.05
export const PHOTO_X_AXIS_DEFAULT: number = 0

export const PHOTO_SCALE_MIN: number = 0
export const PHOTO_SCALE_MAX: number = 3
export const PHOTO_SCALE_STEP: number = 0.05
export const PHOTO_SCALE_DEFAULT: number = 1
