import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      <Navbar />
      <Hero />
    </Router>
  );
}

export default App;
