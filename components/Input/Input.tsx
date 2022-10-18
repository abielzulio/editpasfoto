import { Outer, Ratio, ContainerProps } from "types"
import { SetStateAction, Dispatch } from "react"

interface SliderProps {
  min: number
  max: number
  step: number
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface SelectProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: Ratio[] | Outer[]
}

interface ResetProps {
  resetDefault: Dispatch<SetStateAction<number>>
  defaultValue: number
}

interface TitleProps {
  children: string
}

export const Root = (props: ContainerProps) => (
  <div className="flex flex-col gap-[10px]">{props.children}</div>
)

export const Title = (props: TitleProps) => (
  <p className="text-left">{props.children}</p>
)

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

export const Select = (props: SelectProps) => (
  <select value={props.value} onChange={props.onChange} className="text-black">
    {props.options.map((option) => (
      <option key={option.id} value={option.value}>
        {option.value}
      </option>
    ))}
  </select>
)

export const Reset = (props: ResetProps) => (
  <button onClick={() => props.resetDefault(props.defaultValue)}>↺</button>
)
