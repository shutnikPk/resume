import React, { FC } from "react";
import Adwards from "./adwards/Adwards";
import Information from "./info/Information";
import Languages from "./lang/Lang";
import SideBarSection from "./SideBarSection";
import SideBarTitle from "./SideBarTitle";
import Skills from "./skills/Skills";

interface SideBarComponent {}

const SideBarComponent: FC<SideBarComponent> = () => {
  return (
    <aside className="sideBar-component">
      <Information
        name={"Евгенй"}
        surname={"Шут"}
        phone={"+375-44-555-79-57"}
        telegram={""}
        linkedIn={""}
        eMail={"shutnikssspk@gmai.com"}
      />
      <SideBarSection
        id={"Skills"}
        childFirst={<SideBarTitle title="Skills" />}
        childSecond={
          <Skills
            skills={[
              { "TS/JS": 50 },
              { "HTML/CSS": 70 },
              { React: 60 },
              { Redux: 60 },
            ]}
          />
        }
      />
      <SideBarSection
        id={"Adwards"}
        childFirst={<SideBarTitle title="Adwards" />}
        childSecond={<Adwards />}
      />
      <SideBarSection
        id={"Langueges"}
        childFirst={<SideBarTitle title="Langueges" />}
        childSecond={<Languages lang={[{ English: "B1" }]} />}
      />
    </aside>
  );
};

export default SideBarComponent;
