import React, { FC } from "react";
interface HeaderProps {}
const Header: FC<HeaderProps> = () => {
  return (
    <>
      <header className="container nav bg-primary d-flex justify-content-center p-3">
        <h1>Junior/Junior+ FrontEnd Developer (React+TypeScript)</h1>
      </header>
    </>
  );
};

export default Header;
