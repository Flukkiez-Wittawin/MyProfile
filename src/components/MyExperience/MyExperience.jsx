import "./MyExperience.css";
import FLKZ from "./images/FLKZ.png";
function MyExperience() {
  return (
    <div className="MyExperience" id="Experience">
      <div className="FiveM">
        <h1>Experience of FiveM Server</h1>
        <div className="List">
          <div className="item">
            <h1>OWNER OF FLKZ TEAM</h1>
            <img src={FLKZ} alt={FLKZ} draggable={false} />
          </div>
          <div className="item">
            <h1>SERVER</h1>
            <div className="ListServer">
              <h2>CUTE CITY</h2>
              <h2>Chippi Town</h2>
              <h2>GOD OF STORY</h2>
              <h2>HAPPY CITY</h2>
              <h2>The Royal Academy</h2>
              <h2>Life Roleplay</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="WebServer">
        <h1>Experience of WERSITE</h1>
        <div className="List">
          <div className="item" onClick={()=> window.location = `http://flkzteam-developer.ddns.net:10/`}>
            <h1>FLKZ TEAM WEBSITE</h1>
            <img src={FLKZ} alt={FLKZ} draggable={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyExperience;
