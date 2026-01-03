import { faAngleUp, faAngleDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useMatrix } from '../../hooks/useMatrix';
import { ControlButton } from '../ControlButton';
import { MatrixCell } from '../MatrixCell';

export const ScreenInput = () => {
  const { matrix, updateCell, addRow, removeRow, addCol, removeCol } = useMatrix();

  return (
    <div className="grid place-items-center border rounded-md border-gray-600 bg-white shadow shadow-gray-300 w-fit">
      <div className="flex">
        <div className="flex flex-col order-last gap-2.5 mx-2.5 w-8 h-full self-end">
          <ControlButton icon={faAngleUp} onClick={removeRow} ariaLabel="Remove row" />
          <ControlButton icon={faAngleDown} onClick={addRow} ariaLabel="Add row" />
        </div>

        <div className="h-48 w-[23rem]">
          <div className="grid h-fit w-full place-items-center">
            <div className="h-fit w-full flex flex-col justify-evenly">
              {matrix.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-evenly my-2">
                  {row.map((value, colIndex) => (
                    <MatrixCell
                      key={colIndex}
                      value={value}
                      onChange={(newValue) => updateCell(rowIndex, colIndex, newValue)}
                      rowIndex={rowIndex}
                      colIndex={colIndex}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 my-2.5 h-8 mx-2.5 justify-self-end">
        <ControlButton icon={faChevronLeft} onClick={removeCol} ariaLabel="Remove column" />
        <ControlButton icon={faChevronRight} onClick={addCol} ariaLabel="Add column" />
      </div>
    </div>
  );
};