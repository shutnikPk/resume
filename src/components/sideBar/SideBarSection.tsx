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
    <section className="mt-3">
      {childFirst}
      {childSecond}
    </section>
  );
};

export default SideBarSection;
