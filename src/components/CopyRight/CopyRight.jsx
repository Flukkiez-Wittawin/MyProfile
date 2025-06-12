import { useEffect, useState } from "react";
import "./CopyRight.css";
function CopyRight() {
  const [Year, setYear] = useState("2020");
  useEffect(() => {
    const CurrentYear = new Date().getFullYear();
    setYear(CurrentYear);
  }, []);
  return (
    <div className="CopyRight">
      <p>
        {" "}
        @ CopyRight <span>{Year}</span> by FlukKieZ
      </p>
    </div>
  );
}

export default CopyRight;
