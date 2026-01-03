import './App.css';
import { ScreenInput } from './components/input-screen/input';

function App() {
  const currYear = new Date().getFullYear();

  return (
    <section className="h-screen bg-gray-200">
      <nav className="h-20 w-full flex items-center bg-white shadow shadow-gray-300">
        <h1 className="text-3xl mx-5 font-semibold">Matrix Calculator</h1>
      </nav>

      <div className="my-5 grid place-items-center">
        <div className="flex lg:flex-row flex-col w-full justify-evenly gap-4">
          <ScreenInput />
          <ScreenInput />
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 h-16 w-full grid place-items-center">
        Jobearry @{currYear}
      </footer>
    </section>
  );
}

export default App;
