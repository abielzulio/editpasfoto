import { Outer, Ratio } from "types"

interface SliderProps {
  min: number
  max: number
  step: number
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Slider = (props: SliderProps) => (
  <input
    type="range"
    min={props.min}
    max={props.max}
    step={props.step}
    onChange={props.onChange}
    value={props.value}
  />
)

interface SelectProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: Ratio[] | Outer[]
}

export const Select = (props: SelectProps) => (
  <select
    value={props.value}
    onChange={props.onChange}
    className="text-black my-10"
  >
    {props.options.map((option) => (
      <option key={option.id} value={option.value}>
        {option.value}
      </option>
    ))}
  </select>
)
