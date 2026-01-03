import './App.css';
import { ScreenInput } from './components/input-screen/input';
import { MatrixDimensionControls } from './components/MatrixDimensionControls';
import { useMatrix } from './hooks/useMatrix';

function App() {
  const currYear = new Date().getFullYear();
  const { matrix, updateCell, addRow, removeRow, addCol, removeCol } = useMatrix();

  return (
    <section className="h-screen bg-gray-200">
      <nav className="h-20 w-full flex items-center bg-white shadow shadow-gray-300">
        <h1 className="text-3xl mx-5 font-semibold">Matrix Calculator</h1>
      </nav>

      <div className="my-5 flex flex-col items-center justify-between h-100 gap-2">
        <ScreenInput className='border' matrix={matrix} onUpdateCell={updateCell} />
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

      <footer className="absolute bottom-0 left-0 h-16 w-full grid place-items-center">
        Jobearry @{currYear}
      </footer>
    </section>
  );
}

export default App;
