import { MatrixDimensionControls } from "./matrix/components/MatrixDimensionControls"
import { ScreenInput } from "./matrix/components/Screen"
import { useMatrix } from "./matrix/hooks/useMatrix";

export const MatrixComponent = () => {
  const { matrix, updateCell, addRow, removeRow, addCol, removeCol } = useMatrix();
  return (
    <div className="flex flex-col justify-between h-100 p-5">
      <ScreenInput matrix={matrix} onUpdateCell={updateCell} />
      <div className="flex w-full p-5">
        <MatrixDimensionControls
          onAddRow={addRow}
          onRemoveRow={removeRow}
          onAddCol={addCol}
          onRemoveCol={removeCol}

          className=''
        />
      </div>
    </div>
  )
}