import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import { Route, Routes } from 'react-router';
import Gameslist from './components/Gameslist';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
       <Navbarr/>
       <Routes>
        <Route path="/" element={ <Gameslist/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
