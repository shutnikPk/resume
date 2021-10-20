import React, { FC } from "react";
interface HeaderProps {}
const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header className="">
        <h1 className="">
          <a
            href="https://github.com/shutnikPk"
            target="_blank"
            className="text-decoration-none text-white fs-1"
          >
            Junior/Junior+ FrontEnd Developer (React+TypeScript){" "}
            <i className="fa fa-github"></i>
          </a>
        </h1>
        <div className="">
          <span className="" style={{ cursor: "pointer" }}>
            <u>RU</u>
          </span>
          <span className=""> / </span>
          <span className="" style={{ cursor: "pointer" }}>
            <u>EN</u>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
