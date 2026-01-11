import { Plus, Minus, X } from "lucide-react"
import { ControlButton } from "./ControlButton"

interface OperationControlsProps{
  onOperationClick: (operation: string) => void
  className?: string
}

export const MatrixOperationControls = ({onOperationClick, className}: OperationControlsProps) => {
  return (
    <div className={`flex flex-col gap-3 items-center justify-center p-4 border rounded-md 
    border-gray-400 ${className}`}>
      <span className="text-sm font-medium text-gray-400 text-center">Operations</span>
      <div className="grid grid-rows-2 grid-cols-2 gap-3">
        <ControlButton icon={<Plus size={16} />} onClick={() => onOperationClick('+')} ariaLabel="add operation" />
        <ControlButton className={"row-start-2"}
          icon={<Minus size={16} />} onClick={() => onOperationClick('-')} ariaLabel="minus operation" />
        <ControlButton className={"row-span-2 h-auto"}
          icon={<X size={16} />} onClick={() => onOperationClick('*')} ariaLabel="multiply operation" />
      </div>
    </div>
  )
}