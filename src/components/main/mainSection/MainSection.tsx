import React, { FC, useState } from "react";
interface MainSectionProps {
  title: string;
  content: string;
  hidenContent?: boolean;
}

const MainSection: FC<MainSectionProps> = ({
  title,
  content,
  hidenContent,
}) => {
  const [display, setDisplay] = useState<string>(
    hidenContent ? "none" : "block"
  );
  const [arrowDir, setArrowDir] = useState<string>(
    hidenContent ? "up" : "down"
  );
  const clickHandler = (): void => {
    if (display === "none") {
      setDisplay("block");
      setArrowDir("down");
    } else {
      setDisplay("none");
      setArrowDir("up");
    }
  };
  return (
    <section>
      <p
        style={{ cursor: "pointer" }}
        onClick={clickHandler}
        className="d-flex bg-secondary justify-content-between fs-3 p-1 m-1"
      >
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
