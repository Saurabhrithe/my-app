import './app.scss';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectsSection from './components/ProjectsSection';
import Topbar from './components/Topbar';

import {useState} from "react";

function App() {
  
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    
    <div className='app'>
        <div className="home_head">
          <nav className="header"> 
              <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          </nav>
        </div>
          
        <div className="box">
          <div className="innerbox">
            <div className={"fixed-nav "+ (menuOpen && "active")} >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            </div>
            <div className='sections' id="scroll">
              <About/>
              <Skills/>
              <ProjectsSection/>
              <Contact/>
            </div>
          </div>
        </div>
          

        
    </div>
    

  );
}

export default App;