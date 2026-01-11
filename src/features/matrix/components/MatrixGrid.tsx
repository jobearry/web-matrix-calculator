import { Matrix, MatrixValue } from '../types/types';
import { MatrixCell } from './MatrixCell';

interface MatrixGridProps {
  matrix: Matrix;
  onUpdateCell: (rowIndex: number, colIndex: number, value: MatrixValue) => void;
  className?: string;
}

export const MatrixGrid = ({ matrix, onUpdateCell, className }: MatrixGridProps) => {
  return (
    <div role="grid" aria-label="Matrix grid" className={`grid border-x rounded-md border-gray-400 w-fit p-2 ${className ?? ''}`}>
      <div className="grid h-fit w-full">
        <div className="h-fit w-full flex flex-col gap-3">
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} role="row" className="flex gap-3">
              {row.map((value, colIndex) => (
                <div key={colIndex} role="gridcell" className='flex flex-col gap-2'>
                  <MatrixCell
                    value={value}
                    onChange={(newValue) => onUpdateCell(rowIndex, colIndex, newValue)}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
