import React, { FC } from "react";
interface AdwardsProps {}

const Adwards: FC<AdwardsProps> = () => {
  return (
    <>
      <p className="">
        Second place in study{" "}
        <a href="https://github.com/shutnikPk/01-hackathon/tree/main">
          Hakaton JS
        </a>
      </p>
      <p className="">
        Took a part in study{" "}
        <a href="https://github.com/shutnikPk/hackaton2">Hakaton React</a>
      </p>
    </>
  );
};

export default Adwards;
