import React, { useState } from "react";
import resume from "../Dawnload/resume.pdf"
import { Link} from 'react-scroll'
import "./Navbar.css";
import logo from "./logo.png";
import About from "../profile/About";




const Navbar = () => {
  const [isMobail, setisMobail] = useState(false);

  return (
    <nav className="navbar">
      <logo className="logo"><span class="material-symbols-outlined">
dashboard
</span>HARSHAL</logo>
      <ul className={isMobail ? "nav-linksd" : "nav-links"} onClick={()=>setisMobail(false)}>
        <li className="home"><Link to="home"   duration={-200}  onClick={()=>setisMobail(!isMobail)}>Home</Link></li>
        <li className="home" ><Link to="about"   duration={-200} onClick={()=>setisMobail(!isMobail)}>About</Link></li>
        <li className="home"><Link to="skils"   offset={-100} duration={-200} onClick={()=>setisMobail(!isMobail)}>Skills</Link></li>
        <li className="home"><Link to="projects"   duration={-200} onClick={()=>setisMobail(!isMobail)}>Project</Link></li>
        <li className="home " onClick={()=>setisMobail(!isMobail)}><a href={resume} download className="resumai">Resume</a></li>
        <li className="contact"><Link to="contactme"   duration={-200} onClick={()=>setisMobail(!isMobail)}>CONTACT</Link></li>
      </ul>
      <button className="mobai-menu-icon" onClick={()=>setisMobail(!isMobail)}>
        {isMobail ? <i class="fa-solid fa-xmark"></i> : <i class="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
