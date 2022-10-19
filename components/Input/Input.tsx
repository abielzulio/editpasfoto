import { Outer, Ratio, ContainerProps } from "types"
import { SetStateAction, Dispatch } from "react"
import { ResetIcon } from "@radix-ui/react-icons"

interface SliderProps {
  min: number
  max: number
  step: number
  value: number
  type: "vertical" | "horizontal" | "scale"
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
  <div className="flex gap-[10px] justify-between">
    <p className="!text-sm !text-opacity-20">
      {props.type === "horizontal" && "←"}
      {props.type === "vertical" && "↑"}
      {props.type === "scale" && "-"}
    </p>
    <input
      type="range"
      min={props.min}
      max={props.max}
      step={props.step}
      onChange={props.onChange}
      value={props.value}
      className="w-full"
    />
    <p className="!text-sm !text-opacity-20">
      {props.type === "horizontal" && "→"}
      {props.type === "vertical" && "↓"}
      {props.type === "scale" && "+"}
    </p>
  </div>
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
  <button onClick={() => props.resetDefault(props.defaultValue)}>
    <ResetIcon />
  </button>
)
