import MyBanner from "./gif/Banner.gif";
import "./Banner.css";

function Banner() {
  return (
    
      <div className="Banner" id="Banner">
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <h2>I'm FullStack Developer</h2>
        <img src={MyBanner} alt={MyBanner} draggable={false} />
      </div>

  );
}
export default Banner;
