import React, { FC, useState } from "react";
interface MainSectionProps {}

const MainSection: FC<MainSectionProps> = () => {
  const [disp, setDisp] = useState<string>("");
  const [arrowDir, setArrowDir] = useState<string>("down");
  const clickHandler = (): void => {
    if (disp === "none") {
      setDisp("block");
      setArrowDir("down");
    } else {
      setDisp("none");
      setArrowDir("up");
    }
  };
  return (
    <>
      <p
        onClick={clickHandler}
        className="d-flex bg-secondary justify-content-between fs-3 p-1 m-1"
      >
        <span> Education </span>
        <span>
          <i
            className={"fa fa-chevron-circle-" + arrowDir}
            aria-hidden="true"
          ></i>
        </span>
      </p>
      <div style={{ display: disp }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        veritatis ullam exercitationem neque odit dolore optio asperiores
        obcaecati tempora sint velit quasi dignissimos delectus ut modi officia?
        Eligendi natus quidem illum vero, totam placeat! Aperiam distinctio,
        incidunt culpa ducimus esse facere corrupti reiciendis tempore voluptas
        saepe nihil enim suscipit illo maiores quod impedit nostrum labore modi
        recusandae. Non quibusdam eum officiis cupiditate beatae? Esse sunt
        omnis nulla! Cupiditate nulla assumenda esse sunt consectetur illum iste
        placeat officiis excepturi commodi, fugiat odit deleniti sint ipsa harum
        repellendus eveniet maxime quod voluptate, facere blanditiis distinctio
        quia! Suscipit at mollitia eos alias sequi?
      </div>
    </>
  );
};

export default MainSection;
