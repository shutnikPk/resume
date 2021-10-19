import React, { FC, useState } from "react";
interface MainSectionProps {
  title: string;
  content: string;
}

const MainSection: FC<MainSectionProps> = ({ title, content }) => {
  const [display, setDisplay] = useState<string>("block");
  const [arrowDir, setArrowDir] = useState<string>("down");
  const clickHandler = (): void => {
    console.log("ASD");
    if (display === "none") {
      setDisplay("block");
      setArrowDir("down");
    } else {
      setDisplay("none");
      setArrowDir("up");
    }
  };
  return (
    <section onClick={clickHandler}>
      <p className="d-flex bg-secondary justify-content-between fs-3 p-1 m-1">
        <span> {title} </span>
        <span>
          <i
            className={"fa fa-chevron-circle-" + arrowDir}
            aria-hidden="true"
          ></i>
        </span>
      </p>
      <p style={{ display: display }}>{content}</p>
    </section>
  );
};

export default MainSection;
