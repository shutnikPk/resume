import React, { FC } from "react";
import { Layout, Menu, Row, Col, Space } from "antd";
interface InformationProps {
  name: string;
  surname: string;
  linkedIn: string;
  telegram: string;
  phone: string;
  eMail: string;
}

const Information: FC<InformationProps> = ({
  name,
  surname,
  linkedIn,
  telegram,
  phone,
  eMail,
}) => {
  return (<>
  <Row justify="center">
        <section>
           <div className="avatar"
            style={{
              background: "url('./assets/me.jpg')",
              width: 150,
              height: 150,
              borderRadius: 75,
              backgroundSize: "cover",
            }}
          ></div>
          <h3 className="h3">
            {name} {surname}
          </h3>
          <h5 className="">Minsk, Belarus</h5>
        </section>
  </Row>
  <Row>
    <h2 className="h4">Contact me</h2>
  </Row>
  <Space direction={"horizontal"} size={20}>
        <section>
        <Row>
          <a className="" href={`tel: ${ phone }`}>
            {phone}
          </a>
        </Row>
        <Row>
          <a
            className=""
            href="https://telegram.me/Ashes_of_Ariandel"
            target="_blank" rel="noreferrer"
          >
            Telegram
          </a>
          </Row>
          <Row>
          <a
            className=""
            href="https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D1%88%D1%83%D1%82-3a1016198/"
            target="_blank" rel="noreferrer"
          >
            LikedIn
          </a>
          </Row>
          <Row>
          <a className="" href={`mailto:${eMail}`} target="_blank" rel="noreferrer">
            GMail
          </a>
          </Row>
        </section>
  </Space>
</>
  );
};

export default Information;
