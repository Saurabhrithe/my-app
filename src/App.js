import "./app.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import ProjectsSection from "./components/projects/ProjectsSection";
import Topbar from "./components/topbar/Topbar";

import { useState } from "react";
import Experience from "./components/experience/Experience";
import Certification from "./components/certification/Certification";

function App() {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <div className="container">
      <div className="app">
      <div className="header">
        <Topbar menuBar={menuBar} setmenuBar={setMenuBar} />
      </div>
      <div className="content">
      <div className={"fixed-nav " + (menuBar && "active")}>
        <Navbar menuBar={menuBar} setmenuBar={setMenuBar} />
      </div>
      <div className="info_section">
        <About />
        <Skills />
        <Experience />
        <ProjectsSection />
        <Certification />
        <Contact />
        <div className="bottom">Copyright © Saurabh Rithe</div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
