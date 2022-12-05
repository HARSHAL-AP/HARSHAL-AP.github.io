import style from "./Projectcard.css";

const Projectcard = ({ image, heading, desc, llink, gitlink ,reactlog}) => {
  return (
    <>
      <div className="postcard">
        <img className="cartimag" src={image} alt="" />
        <h1 className="cardhead">{heading}</h1>
        <p className="carddetails">{desc}</p>
        <div className="texttag">
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3"></i>
          <i class="fa-brands fa-js"></i>
          {reactlog&&<i class="fa-brands fa-react"></i>}
        </div>
        <div className="texttag">
            <button className="gitlink"><a href={gitlink} target="_blank"><i class="fa-brands fa-github"></i></a></button>
            <button className="livelink"><a href={llink} target="_blank">Live</a></button>
        </div>
      </div>
    </>
  );
};
export default Projectcard;
