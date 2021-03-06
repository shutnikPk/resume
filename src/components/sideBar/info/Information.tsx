import React, { FC } from "react";
import { Row, Col } from "antd";
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
  return (
    <>
      <Col>
        <Row>
          <section>
            <div className="avatar" />
            <h2 style={{ margin: 0 }}>
              {name} {surname}
            </h2>
            <h5 className="">Minsk, Belarus</h5>
          </section>
        </Row>
        <Row>
          <h3 style={{ margin: 0 }}>Contact me</h3>
        </Row>

        <section>
          <Row>
            <a className="contact-link" href={`tel: ${phone}`}>
              {phone}
            </a>
          </Row>
          <Row>
            <a
              className="contact-link"
              href="https://telegram.me/Ashes_of_Ariandel"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </Row>
          <Row>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D1%88%D1%83%D1%82-3a1016198/"
              target="_blank"
              rel="noreferrer"
            >
              LikedIn
            </a>
          </Row>
          <Row>
            <a
              className="contact-link"
              href={`mailto:${eMail}`}
              target="_blank"
              rel="noreferrer"
            >
              GMail
            </a>
          </Row>
        </section>
      </Col>
    </>
  );
};

export default Information;
