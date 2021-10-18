import React, { FC } from "react";
interface MainTitleProps {
  title: string;
  arrowDir: string;
}

const MainTitle: FC<MainTitleProps> = ({ arrowDir, title }) => {
  return (
    <p className="d-flex bg-secondary justify-content-between fs-3 p-1 m-1">
      <span> {title} </span>
      <span>
        <i
          className={"fa fa-chevron-circle-" + arrowDir}
          aria-hidden="true"
        ></i>
      </span>
    </p>
  );
};

export default MainTitle;
