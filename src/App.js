import './App.css';
import Home from './pages/index'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Home />
      <Hero />
      <About />
    </Router>
  );
}

export default App;
