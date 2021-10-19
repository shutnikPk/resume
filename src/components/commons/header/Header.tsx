import React, { FC } from "react";
interface HeaderProps {}
const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header className="container bg-dark d-flex p-3">
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
        <div className="text-white p-3 ms-auto">
          <span className="col p-0" style={{ cursor: "pointer" }}>
            <u>RU</u>
          </span>
          <span className="col m-1"> / </span>
          <span className="col p-0" style={{ cursor: "pointer" }}>
            <u>EN</u>
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
