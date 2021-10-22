import { Col, Row } from "antd";
import React, { FC, useState } from "react";
import MainSection from "./mainSection/MainSection";

interface MainProps {
  data: any;
}

const Main: FC<MainProps> = ({ data }) => {
  return (
    <Col>
      <main className="">
        <Row>
          <MainSection
            title={data.education.title}
            content={data.education.content}
          />
        </Row>
        <Row>
          <MainSection
            title={data.expirience.title}
            content={data.expirience.content}
          />
        </Row>
        <Row>
          <MainSection
            title={data.nonRelevantExpirience.title}
            content={data.nonRelevantExpirience.content}
            hidenContent={data.nonRelevantExpirience.hidenContent}
          />
        </Row>
        <Row>
          <MainSection
            title={data.topProjects.title}
            content={data.topProjects.content}
            hidenContent={data.topProjects.hidenContent}
          />
        </Row>
      </main>
    </Col>
  );
};

export default Main;
