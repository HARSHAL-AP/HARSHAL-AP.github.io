import React from "react";
import style from "./contactme.css";

function Contactme() {
  return (
    <div id="contactme">
      <div className="contactbiody">
      
        <h2 className="mm">Contact me...</h2>
        <h1 className="mmyno">Harshal Apsunde</h1>
        <h3 className="mmyno">+91-7028-38-6059</h3>
        <h3 className="mmyno">apsundeharshal129@gmail.com</h3>
        <div>
          <a href="https://github.com/HARSHAL-AP" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/harshal-apsunde-42b40b236"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:apsundeharshal129@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
