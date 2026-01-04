import { MatrixDimensionControls } from "./matrix/components/MatrixDimensionControls"
import { ScreenInput } from "./matrix/components/Screen"
import { useMatrix } from "./matrix/hooks/useMatrix";
import { MatrixOperationControls } from "./matrix/components/MatrixOperationControls";

export const MatrixComponent = () => {
  const { matrix, updateCell, addRow, removeRow, addCol, removeCol } = useMatrix();
  const test = () => {}
  return (
    <div className="flex flex-col items-center justify-between h-150 p-5 gap-2">
      <ScreenInput 
        matrix={matrix} onUpdateCell={updateCell} />
      <div className="flex w-full justify-center gap-2">
        <MatrixDimensionControls
          onAddRow={addRow}
          onRemoveRow={removeRow}
          onAddCol={addCol}
          onRemoveCol={removeCol}

          className=''
        />

        <MatrixOperationControls onClick={test}/>
      </div>
    </div>
  )
}