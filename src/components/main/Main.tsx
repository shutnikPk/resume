import React, { FC } from "react";
import MainSection from "./mainSection/MainSection";
interface MainProps {}

const Main: FC<MainProps> = () => {
  return (
    <main className="col-9 p-2">
      <MainSection />
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
};

export default Main;
