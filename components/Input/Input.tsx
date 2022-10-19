import { Outer, Ratio } from "types"
import { SetStateAction, Dispatch, SelectHTMLAttributes } from "react"
import { ResetIcon } from "@radix-ui/react-icons"

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "vertical" | "horizontal" | "scale"
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Ratio[] | Outer[]
}

interface ResetProps {
  resetDefault: Dispatch<SetStateAction<number>>
  defaultValue: number
  currentValue: number
}

export const Root = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className = `flex-col` } = props
  return <div className={`flex gap-[5px] ${className}`}>{props.children}</div>
}

export const Title = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={props.className}>{props.children}</p>
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
  <select
    value={props.value}
    onChange={props.onChange}
    className="text-black w-full"
  >
    {props.options.map((option) => (
      <option key={option.id} value={option.value}>
        {option.value}
      </option>
    ))}
  </select>
)

export const Reset = (props: ResetProps) =>
  props.currentValue !== props.defaultValue ? (
    <button onClick={() => props.resetDefault(props.defaultValue)}>
      <ResetIcon />
    </button>
  ) : null
