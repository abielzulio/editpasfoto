import { Ratio } from "types"

const BASE_SIZE: number = 100

export const IMAGE_RATIO_OPTIONS: Ratio[] = [
  {
    id: 1,
    label: "1:1",
    value: "1:1",
    width: (1 / 1) * BASE_SIZE,
    height: BASE_SIZE,
  },
  {
    id: 2,
    label: "2:3",
    value: "2:3",
    width: (2 / 3) * BASE_SIZE,
    height: BASE_SIZE,
  },
  {
    id: 3,
    label: "3:4",
    value: "3:4",
    width: (3 / 4) * BASE_SIZE,
    height: BASE_SIZE,
  },
  {
    id: 4,
    label: "4:5",
    value: "4:5",
    width: (4 / 5) * BASE_SIZE,
    height: BASE_SIZE,
  },
]

export const IMAGE_SCALER_FACTOR: number = 3
