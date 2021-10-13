import React, { FC } from "react";
import SideBarTitle from "./SideBarTitle";
interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <>
      <div>
        <SideBarTitle title="Skils" />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

export default SideBar;
