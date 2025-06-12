import "./Navbar.css";
import ReturnIcon from "./images/return.png";
import { useEffect } from "react";
function Navbar() {
  const handleScroll = (parameter) => {
    const target = document.getElementById(parameter);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const backEl = document.querySelector(".Back");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const scrollFactor =  0.05;
      let newTop = 44.5 + scrollY * scrollFactor;

      // จำกัด range ตามอุปกรณ์
      const maxTop = 100;
      newTop = Math.max(10, Math.min(newTop, maxTop));

      if (backEl) {
        backEl.style.top = `${newTop}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once at mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="Navbar" id="Home">
        <title>MyProfile | Wittawin Chadasin</title>
        <h1 className="MyProfileText" onClick={()=> handleScroll(`Home`)}>
          MyProfile
        </h1>
        <ul>
          <li onClick={() => handleScroll(`Home`)}>Home</li>
          <li onClick={() => handleScroll(`Personal`)}>Personal</li>
          <li onClick={() => handleScroll(`Experience`)}>Experience</li>
        </ul>
      </div>

      <div
        className="Back" hidden={true}
        onClick={() => handleScroll(`Home`)}
      >
        <img src={ReturnIcon} alt={ReturnIcon} />
        <h1>BACK</h1>
      </div>
    </>
  );
}

export default Navbar;
