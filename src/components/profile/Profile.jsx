import avtar from "./avtar.jpg"
import avtar2 from "./avtar2.jpg"
import antar from "./antar.png"
import style from "./Profile.css"
import About from "./About"
import Projects from "../Project/Projects.jsx"  
import resume from "../Dawnload/resume.pdf"

let arr=["FUll Stack Developer","Open Source Contrubution","MERN Stack Developer","Frontend Designer"]
const Profile=()=>{

    



return (
    <div id="home"> <div className="profilebody">
    <div className="profilecard">
        <div className="avtarifo">
            <h2 className="hithere">HI There!👋</h2>
            <h2 className="nametag">I'M <span>HARSHAL APSUNDE</span></h2>
            <h3 className="jobs">FUll Stack Web Developer</h3>
            <a href="https://github.com/HARSHAL-AP" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/harshal-apsunde-42b40b236" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <button className="resumebtn"><a href={resume} download>Resume <i class="fa-regular fa-circle-down"></i></a></button>
        </div>
        
        <div className="avtardiv">
            <img src={avtar} alt="" />
            
        </div>
    </div>
   </div>
   
   </div>
  
)



}
export default Profile