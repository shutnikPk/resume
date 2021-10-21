import { Col, Row } from "antd";
import Text from "antd/lib/typography/Text";
import React, { FC } from "react";
interface AdwardsProps {}

const Adwards: FC<AdwardsProps> = () => {
  return (
    <Row className="row-justify-center">
      <Col>
      <Row>
      <Text className="">
        Second place in study{" "}
        <a href="https://github.com/shutnikPk/01-hackathon/tree/main">
          Hakaton JS
        </a>
      </Text>    
      </Row>
      <Row>
      <Text className="">
        Took a part in study{" "}
        <a href="https://github.com/shutnikPk/hackaton2">Hakaton React</a>
      </Text>
      </Row>
      </Col>
    </Row>
  );
};

export default Adwards;
