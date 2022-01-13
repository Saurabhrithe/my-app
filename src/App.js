import './app.scss';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import ProjectsSection from './components/projects/ProjectsSection';
import Topbar from './components/topbar/Topbar';

import {useState} from "react";

function App() {
  
  const [menuBar, setMenuBar] = useState(false)
  return (
    
    <div className='app'>
      <div className="header"> 
        <Topbar menuBar={menuBar} setmenuBar={setMenuBar}/>
      </div>
      <div className={"fixed-nav "+ (menuBar && "active")} >
          <Navbar menuBar={menuBar} setmenuBar={setMenuBar}/>
      </div>
      <div className='info_section'>
              <About/>
              <Skills/>
              <ProjectsSection/>
              <Contact/>
              <div className="bottom">
                  Copyright © Saurabh Rithe
              </div>      
      
      </div>
    </div>
  );
}

export default App;