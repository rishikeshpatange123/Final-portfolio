import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/Home" element={<Home />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
