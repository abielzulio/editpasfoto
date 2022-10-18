import { Outer } from "types"

const OUTER_PATH_BASE: string = "/img/outer"
const OUTER_FILE_TYPE: string = "png"

export const OUTER_OPTIONS: Outer[] = [
  {
    id: 1,
    value: "Formal 1",
    src: `${OUTER_PATH_BASE}/formal/1.${OUTER_FILE_TYPE}`,
  },
  {
    id: 2,
    value: "Formal 2",
    src: `${OUTER_PATH_BASE}/formal/2.${OUTER_FILE_TYPE}`,
  },
  {
    id: 3,
    value: "Formal 3",
    src: `${OUTER_PATH_BASE}/formal/3.${OUTER_FILE_TYPE}`,
  },
  {
    id: 4,
    value: "Formal 4",
    src: `${OUTER_PATH_BASE}/formal/4.${OUTER_FILE_TYPE}`,
  },
  {
    id: 5,
    value: "UGM 1",
    src: `${OUTER_PATH_BASE}/ugm/1.${OUTER_FILE_TYPE}`,
  },
  {
    id: 6,
    value: "UGM 2",
    src: `${OUTER_PATH_BASE}/ugm/2.${OUTER_FILE_TYPE}`,
  },
]

export const OUTER_Y_AXIS_MIN: number = -100
export const OUTER_Y_AXIS_MAX: number = 200
export const OUTER_Y_AXIS_STEP: number = 0.05
