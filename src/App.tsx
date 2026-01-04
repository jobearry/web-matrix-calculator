import './App.css';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { MatrixComponent } from './features/MatrixComponent';

function App() {

  return (
    <section className="">
      <Navbar />
      <MatrixComponent/>
      <Footer />
    </section>
  );
}

export default App;
