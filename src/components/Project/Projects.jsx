import style from "./Project.css";
import Projectcard from "./projectcard/Projectcard";
import proim from "./proim.png";
import farfetch from "./images/farfetch.png"
import coronometer from "./images/coronometer.png"
import bathandbody from "./images/bathandbody.png"
import ssence from "./images/ssence.png"
import dreambath from "./images/dreambath.jpg"

const Projects = () => {
  return (
    <div id="projects">
      <div className="porjectbody">
      <h1 className="aboutme">Projects...</h1>
        <div className="headbody">
          <img src={proim} alt="" className="imgani" />
          <h1 className="imgdata">
            👨‍💻My projects make use of a vast variety of latest technology tools.
            My best experience is to create NodeJS Backend Projects and React
            Project. Below are some of my projects....
          </h1>
        </div>
        <div className="procards">
          <Projectcard
          image={dreambath}
          heading="DreamBaths.com"
          desc="DreamBaths.com is a shopping website that has Products Loke Soaps, Room Freshners,Candals ,Body Spress and so more For all type of coustomer."
          llink="loyal-horse-6020-a7ac.vercel.app"
          gitlink="https://github.com/arupadhyay25/loyal-horse-6020"
          reactlog="true"
          />
          <Projectcard image={ssence}
          heading="SSENSE.com Clone"
          desc="Sense is a shopping website that has emerging designers and streetwear brands for both men and women with global shipping."
          llink="https://astounding-liger-97ffc4.netlify.app"
          gitlink="https://github.com/Ataburjee/mindless-houses-7119"
         
          />
          <Projectcard
          image={bathandbody}
          heading="Bath&BodyWorks.com Clone"
          desc="Bath&BodyWorks is a shopping website that has Products Loke Soaps, Room Freshners,Candals ,Body Spress and so more For all type of coustomer."
          llink="https://guileless-longma-a0b1d8.netlify.app/index.html"
          gitlink="https://github.com/HARSHAL-AP/unwieldy-sponge-3549"
          />
          <Projectcard
          image={farfetch}
          heading="Farfetch.com Clone"
          desc="Farfetch is Ecommerce web interface for luxerious fassion, garment products and brands."
          llink="https://illustrious-crostata-a644a9.netlify.app"
          gitlink="https://github.com/HARSHAL-AP/projectunit3_farfetch.com"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
