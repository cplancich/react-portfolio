import './App.css';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Project } from './components/Project.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <About />
      </div>
      <Project />
      <Footer />
    </>
  );
}

export default App;