import style from "./Skills.css"
import hurokuicon from "./hurokuicon.png"
import logo512 from "./logo512.png"
import mongodblogo from "./mongodblogo.png"
import nodejsicon from "./nodejsicon.png"
import netly from "./netly.png"
import hticon from "./hticon.png"
import csspn from "./csspn.png"

const Skills=()=>{
return (
    <div id="skils">
        <h1 className="heading">Skills/Tools</h1>
        <div className="alltags">
        <div><img src={hticon} alt="" className="iconpngs"/></div>
        <div><img src={csspn} alt="" className="iconpngs"/></div>
        <div><i class="fa-brands fa-square-js"></i></div>
        <div><img src={logo512} alt="" className="iconpngs"/></div>
        <div><i class="fa-brands fa-bootstrap"></i></div>
        <div><i class="fa-brands fa-npm"></i></div>
        <div><i class="fa-brands fa-git-alt"></i></div>
        <div><img src={mongodblogo} alt="" className="iconpngs"/></div>
        <div><img src={nodejsicon} alt="" className="iconpngs"/></div>
        <div><img src={hurokuicon} alt="" className="iconpngs"/></div>
        <div><img src={netly} alt="" className="iconpngs"/></div>
        
        
        </div>
    </div>
)

}


export default Skills