import React, { FC } from "react";
interface SideBarTitleProps {
  title: string;
}

const SideBarTitle: FC<SideBarTitleProps> = ({ title }) => {
  return (
    <div className="bg-secondary row">
      <span className="col-1">ic</span>
      <span className="col-2 text-light justify-self-center">{title}</span>
    </div>
  );
};

export default SideBarTitle;
