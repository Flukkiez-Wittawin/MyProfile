import { useEffect, useState } from "react";
import "./Main.css";
function Main() {
  const [Name, SetName] = useState(`flukkiez-wittawin`);
  const [MyAge, setMyAge] = useState(`20`);

  useEffect(() => {
    const birthDate = new Date("2005-09-18");
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const isBeforeBirthday =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate());

    if (isBeforeBirthday) {
      age -= 1;
    }

    const ageRange = `${age}-${age + 1}`;
    setMyAge(ageRange);
  }, []);

  return (
    <div className="Main" id="Personal">
      <div className="left">
        <img
          src={`https://github.com/${Name}.png`}
          alt={`GitHub Profile ${Name}`}
          draggable={false}
        />
      </div>
      <div className="right">
        <h1>Personal Information</h1>
        <h2>
          Name : <span>Wittawin Chadasin</span>
        </h2>
        <h2>
          NickName : <span>FlukKieZ</span>
        </h2>
        <h2>
          Age : <span>{MyAge}</span> Years
        </h2>
        <h2>
          Study : <span>Cyber Security in KhonKaen University</span>
        </h2>
        <h2>
          Programming Languages : <span>JS, TS, PHP, GO, Lua</span>
        </h2>
        <h2>
          Framework : <span>React, VueJs, Svelte, NodeJs</span>
        </h2>
        <h2>
          Database : <span>MySQL, MongoDB</span>
        </h2>
      </div>
    </div>
  );
}
export default Main;
