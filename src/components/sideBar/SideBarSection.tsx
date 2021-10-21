import React, { FC } from "react";
interface SideBarSectionProps {
  id: string | number;
  childFirst: React.ReactChild;
  childSecond: React.ReactChild;
}

const SideBarSection: FC<SideBarSectionProps> = ({
  childFirst,
  childSecond,
}) => {
  return (
    <section className="sideBar-section">
      {childFirst}
      {childSecond}
    </section>
  );
};

export default SideBarSection;
