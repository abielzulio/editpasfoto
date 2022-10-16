import { Ratio } from "types"

export const IMAGE_RATIO_OPTIONS: Ratio[] = [
  { id: 1, label: "1:1", value: "1:1", width: 100, height: 100 },
  { id: 2, label: "1:2", value: "1:2", width: 50, height: 100 },
  { id: 3, label: "2:3", value: "2:3", width: 100, height: 150 },
  { id: 4, label: "3:4", value: "3:4", width: 75, height: 100 },
  { id: 5, label: "4:5", value: "4:5", width: 100, height: 125 },
]

export const IMAGE_SCALER_FACTOR: number = 3
