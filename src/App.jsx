import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Resume from "./components/resume/Resume2";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="menu">
        <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      </div>
      <div className="section">
        <Intro/>
        <About/>
        <Resume/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
