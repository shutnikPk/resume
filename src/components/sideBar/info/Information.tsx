import React, { FC } from "react";
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
      <div className="">
        <section>
          {/* <div
            style={{
              background: "url('./assets/me.jpg')",
              width: 150,
              height: 150,
              borderRadius: 75,
              backgroundSize: "cover",
            }}
          ></div> */}
          <span className="">
            {name} {surname}
          </span>
          <p className="">Minsk, Belarus</p>
        </section>
        <h2 className="">Contact me</h2>
        <section>
          <a className="" href={"tel:" + { phone }}>
            {phone}
          </a>
          <a
            className=""
            href="https://telegram.me/Ashes_of_Ariandel"
            target="_blank"
          >
            Telegram
          </a>
          <a
            className=""
            href="https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D1%88%D1%83%D1%82-3a1016198/"
            target="_blank"
          >
            LikedIn
          </a>
          <a className="" href={`mailto:${eMail}`} target="_blank">
            GMail
          </a>
        </section>
      </div>
    </>
  );
};

export default Information;
