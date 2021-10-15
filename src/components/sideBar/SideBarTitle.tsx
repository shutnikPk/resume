import React, { FC } from "react";
interface SideBarTitleProps {
  title: string;
}

const SideBarTitle: FC<SideBarTitleProps> = ({ title }) => {
  return (
    <div className="bg-secondary m-1 mt-2 ps-1">
      <span className=" text-light fw-bolder">{title}</span>
    </div>
  );
};

export default SideBarTitle;
