import { Col, Row } from "antd";
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
    <Col>
      <aside className="sideBar-component">
        <Row>
          <Information
            name={"Евгенй"}
            surname={"Шут"}
            phone={"+375-44-555-79-57"}
            telegram={""}
            linkedIn={""}
            eMail={"shutnikssspk@gmai.com"}
          />
        </Row>
        <Row>
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
        </Row>
        <Row>
          <SideBarSection
            id={"Adwards"}
            childFirst={<SideBarTitle title="Adwards" />}
            childSecond={<Adwards />}
          />
        </Row>
        <Row>
          <SideBarSection
            id={"Languages"}
            childFirst={<SideBarTitle title="Languages" />}
            childSecond={<Languages lang={[{ English: "B1" }]} />}
          />
        </Row>
      </aside>
    </Col>
  );
};

export default SideBarComponent;
