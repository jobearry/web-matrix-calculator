import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { ControlButton } from './ControlButton';

interface MatrixDimensionControlsProps {
  onAddRow: () => void;
  onRemoveRow: () => void;
  onAddCol: () => void;
  onRemoveCol: () => void;

  className?: string;
}

export const MatrixDimensionControls = ({
  onAddRow,
  onRemoveRow,
  onAddCol,
  onRemoveCol,

  className
}: MatrixDimensionControlsProps) => {
  return (
    <div className={`flex gap-6 items-center justify-center p-4 border rounded-md 
    border-gray-400 ${className}`}>
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-gray-400 text-center">Rows</span>
        <div className="flex gap-2">
          <ControlButton icon={<ChevronUp size={16} />} onClick={onRemoveRow} ariaLabel="Remove row" />
          <ControlButton icon={<ChevronDown size={16} />} onClick={onAddRow} ariaLabel="Add row" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-gray-400 text-center">Columns</span>
        <div className="flex gap-2">
          <ControlButton icon={<ChevronLeft size={16} />} onClick={onRemoveCol} ariaLabel="Remove column" />
          <ControlButton icon={<ChevronRight size={16} />} onClick={onAddCol} ariaLabel="Add column" />
        </div>
      </div>
    </div>
  );
};
