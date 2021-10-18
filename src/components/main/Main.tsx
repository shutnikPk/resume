import React, { FC, useState } from "react";
import MainEducation from "./education/MainEducation";
import MainSection from "./mainSection/MainSection";
import MainTitle from "./mainTitle/MainTitle";
interface MainProps {}

const Main: FC<MainProps> = () => {
  const [disp, setDisp] = useState<string>("block");
  const [arrowDir, setArrowDir] = useState<string>("down");
  const clickHandler = (): void => {
    console.log("ASD");
    if (disp === "none") {
      setDisp("block");
      setArrowDir("down");
    } else {
      setDisp("none");
      setArrowDir("up");
    }
  };
  return (
    <main className="col-9 p-2">
      <MainSection
        firstChild={<MainTitle title={"Education"} arrowDir={"down"} />}
        secondChild={<MainEducation disp={"block"} />}
      />
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
};

export default Main;
