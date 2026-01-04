import { MatrixCell } from './MatrixCell';
import { Matrix, MatrixValue } from '../types/types';
import { MatrixUpperDisplay } from './MatrixUpperDisplay';

interface ScreenInputProps {
  matrix: Matrix;
  onUpdateCell: (rowIndex: number, colIndex: number, value: MatrixValue) => void;
  className?: string;
}

export const ScreenInput = ({ matrix, onUpdateCell, className }: ScreenInputProps) => {
  return (
    <div className={`grid border rounded-md border-gray-400 w-fit p-4 ${className}`}>
      <div className="grid h-fit w-full">
        <div className="h-fit w-full flex flex-col gap-5">
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-5">
              {row.map((value, colIndex) => (
                <div className='flex flex-col gap-2'>
                  <MatrixUpperDisplay />
                  <MatrixCell
                    key={colIndex}
                    value={value}
                    onChange={(newValue) => onUpdateCell(rowIndex, colIndex, newValue)}
                    rowIndex={rowIndex}
                    colIndex={colIndex} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};