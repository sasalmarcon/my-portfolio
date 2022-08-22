import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Projects';
import Footer from './components/Footer';
import './assets/App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
