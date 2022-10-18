export interface Image {
  id: number
  src: string | undefined
  name: string
}

export interface Ratio {
  id: number
  label: string
  value: string
  width: number
  height: number
}

export interface Outer {
  id: number
  value: string
  src: string
}
