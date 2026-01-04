import { Plus, Minus, Equal } from "lucide-react"
import { ControlButton } from "./ControlButton"

interface OperationControlsProps{
  onClick: () => void
  className?: string
}

export const MatrixOperationControls = ({onClick, className}: OperationControlsProps) => {
  return (
    <div className={`flex flex-col gap-3 items-center justify-center p-4 border rounded-md 
    border-gray-600 ${className}`}>
      <span className="text-sm font-medium text-gray-700 text-center">Operations</span>
      <div className="grid grid-rows-2 grid-cols-2 gap-3">
        <ControlButton icon={<Plus size={16} />} onClick={onClick} ariaLabel="add operation" />
        <ControlButton className={"row-start-2"}
          icon={<Minus size={16} />} onClick={onClick} ariaLabel="minus operation" />
        <ControlButton className={"row-span-2 h-auto"}
          icon={<Equal size={16} />} onClick={onClick} ariaLabel="equals operation" />
      </div>
    </div>
  )
}