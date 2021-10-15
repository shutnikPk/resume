import React, { FC } from "react";
interface SideBarTitleProps {
  title: string;
}

const SideBarTitle: FC<SideBarTitleProps> = ({ title }) => {
  return (
    <p className="bg-secondary m-1 mt-2 ps-1">
      <span className=" text-light fw-bolder">{title}</span>
    </p>
  );
};

export default SideBarTitle;
