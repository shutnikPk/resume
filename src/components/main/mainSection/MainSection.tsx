import React, { FC, useState } from "react";
interface MainSectionProps {
  firstChild: React.ReactChild;
  secondChild: React.ReactChild;
}

const MainSection: FC<MainSectionProps> = ({ firstChild, secondChild }) => {  
  return (
    <section>
      {firstChild}
      {secondChild}
    </section>
  );
};

export default MainSection;
