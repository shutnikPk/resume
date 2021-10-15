import React, { FC } from "react";
import Adwards from "./adwards/Adwards";
import Information from "./info/Information";
import Languages from "./lang/Lang";
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
          <Skills
            skills={[
              { "TS/JS": 50 },
              { "HTML/CSS": 70 },
              { React: 60 },
              { Redux: 60 },
            ]}
          />
        </div>
        <div className="mt-3">
          <SideBarTitle title="Adwards" />
        </div>
        <div>
          <Adwards />
        </div>
        <div className="mt-3">
          <SideBarTitle title="Langueges" />
        </div>
        <div>
          <Languages lang={[{ English: "B1" }]} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
