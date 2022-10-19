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
