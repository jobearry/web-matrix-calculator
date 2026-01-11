import { useState } from 'react';
import { MatrixDimensionControls } from "./matrix/components/MatrixDimensionControls"
import { MatrixGrid } from "./matrix/components/MatrixGrid"
import { useMatrix } from "./matrix/hooks/useMatrix";
import { MatrixOperationControls } from "./matrix/components/MatrixOperationControls";
import { add, subtract, multiply } from "./matrix/matrixUtils";
import { Matrix, MAX_DIMENSION } from './matrix/types/types';

export const MatrixComponent = () => {
  const A = useMatrix();
  const B = useMatrix();
  const [result, setResult] = useState<Matrix | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOperation = (operation: string) => {
    setError(null);

    // basic validation: no empty cells
    // if (hasEmptyCells(A.matrix) || hasEmptyCells(B.matrix)) {
    //   setError('INVALID! Empty cell(s) present in A or B');
    //   setResult(null);
    //   return;
    // }

    let res: Matrix | null = null;
    if (operation === "+") {
      res = add(A.matrix, B.matrix);
      if (res === null) setError("Add/Subtract require equal dimensions");
    } else if (operation === "-") {
      res = subtract(A.matrix, B.matrix);
      if (res === null) setError("Add/Subtract require equal dimensions");
    } else if (operation === "*") {
      res = multiply(A.matrix, B.matrix);
      if (res === null) setError("Multiplication: A columns must equal B rows");
    }
    setResult(res);
  };

  return (
    <div className="flex flex-col items-center justify-between p-5 gap-2">
      <div className="flex flex-nowrap md:flex-row gap-4 items-start">
        <div className='w-full h-100 flex flex-col justify-between items-center'>
          <h3 className="text-sm font-medium mb-2">Matrix A</h3>
          <MatrixGrid matrix={A.matrix} onUpdateCell={A.updateCell} />
          <MatrixDimensionControls
            onAddRow={A.addRow}
            onRemoveRow={A.removeRow}
            onAddCol={A.addCol}
            onRemoveCol={A.removeCol}
            className="mt-2"
          />
        </div>
        <div className='w-full h-100 flex flex-col justify-between items-center'>
          <h3 className="text-sm font-medium mb-2">Matrix B</h3>
          <MatrixGrid matrix={B.matrix} onUpdateCell={B.updateCell} />
          <MatrixDimensionControls
            onAddRow={B.addRow}
            onRemoveRow={B.removeRow}
            onAddCol={B.addCol}
            onRemoveCol={B.removeCol}
            className="mt-2"
          />
        </div>
      </div>

      <div className="mt-4">
        <MatrixOperationControls className='my-2' onOperationClick={handleOperation} />
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-medium">Result</h3>
          <div className="flex gap-2">
            <button
              className="px-2 py-1 border rounded text-sm hover:bg-gray-700 transition-colors"
              onClick={() => setResult(null)}
              aria-label="Clear result"
            >
              Clear
            </button>
            <button
              className="px-2 py-1 border rounded text-sm hover:bg-gray-700 transition-colors"
              onClick={() => {
                if (!result) return;
                if (result.length > MAX_DIMENSION || (result[0]?.length || 0) > MAX_DIMENSION) {
                  setError(`Result too large to copy (max ${MAX_DIMENSION}x${MAX_DIMENSION})`);
                  return;
                }
                A.setMatrix(result);
              }}
              aria-label="Copy result to A"
            >
              Copy → A
            </button>
            <button
              className="px-2 py-1 border rounded text-sm hover:bg-gray-700 transition-colors"
              onClick={() => {
                if (!result) return;
                if (result.length > MAX_DIMENSION || (result[0]?.length || 0) > MAX_DIMENSION) {
                  setError(`Result too large to copy (max ${MAX_DIMENSION}x${MAX_DIMENSION})`);
                  return;
                }
                B.setMatrix(result);
              }}
              aria-label="Copy result to B"
            >
              Copy → B
            </button>
          </div>
        </div>

        {error ? (
          <p className="text-sm text-red-500" aria-live="assertive">{error}</p>
        ) : result ? (
        <div className='w-full flex justify-center my-5 p-2 rounded-md border border-blue-500'>
            <MatrixGrid className=''
              matrix={result}
              onUpdateCell={(row, col, value) => {
                setResult((prev) => {
                  if (!prev) return prev;
                  const copy = prev.map((r) => [...r]);
                  copy[row][col] = value;
                  return copy;
                });
              }}
            />
          </div>
        ) : (
          <p className="text-sm text-gray-500 w-full flex justify-center my-3 p-2 rounded-md border border-gray-500">No result yet</p>
        )}
      </div>
    </div>
  );
}