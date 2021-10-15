import React, { FC } from "react";
interface HeaderProps {}
const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header className="container nav bg-primary d-flex p-3">
        <h1 className="m-0">
          <a
            href="https://github.com/shutnikPk"
            target="_blank"
            className="text-decoration-none text-dark fs-1"
          >
            Junior/Junior+ FrontEnd Developer (React+TypeScript){" "}
            <i className="fa fa-github"></i>
          </a>
        </h1>
      </header>
    </>
  );
};

export default Header;
