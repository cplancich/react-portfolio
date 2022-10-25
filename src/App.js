import './App.css';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <>
    <div className="bg-[#141F32]">
      <Navigation />
      <div className="container mx-auto">
        <About />
      </div>
      <Portfolio />
      <Footer />
    </div>
    </>
  );
}

export default App;