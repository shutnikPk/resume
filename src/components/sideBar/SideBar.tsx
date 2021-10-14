import React, { FC } from "react";
import Information from "./info/Information";
import SideBarTitle from "./SideBarTitle";
import Skills from "./skills/Skills";
interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  return (
    <>
      <div className="bg-info">
        <Information
          name={"Евгенй"}
          surname={"Шут"}
          phone={"+375-44-555-79-57"}
          telegram={""}
          linkedIn={""}
          eMail={"shutnikssspk@gmai.com"}
        />
        <div>
          <SideBarTitle title="Skills" />
        </div>
        <div>
          <Skills skills={[{ TS: 50 }, { "HTML/CSS": 70 }, { React: 60 }]} />
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default SideBar;
