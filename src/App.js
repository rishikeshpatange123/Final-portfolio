import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import {Routes,Route,useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';



function App() {
  const location = useLocation();
  return (
    <div>

        <Navbar />
        <AnimatePresence initial={false} exitBeforeEnter>
      
        <Routes location={location} key={location.pathname} >
          <Route path="/Home"   element={<Home/>}>
          </Route>
          <Route path="/About" element={<About/>}>
          </Route>
          <Route path="/Contact" element={<Contact/>}>  
          </Route>
          <Route path="/Project" element={<Project/>}>  
          </Route>
        </Routes>
        
        </AnimatePresence>
    </div>

  );
}
export default App;