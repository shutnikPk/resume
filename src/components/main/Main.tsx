import React, { FC, useState } from "react";
import MainSection from "./mainSection/MainSection";

interface MainProps {
  data: any;
}

const Main: FC<MainProps> = ({ data }) => {
  return (
    <main className="col-9 p-2">
      <MainSection
        title={data.education.title}
        content={data.education.content}
      />
      <MainSection
        title={data.expirience.title}
        content={data.expirience.content}
      />
      <MainSection
        title={data.nonRelevantExpirience.title}
        content={data.nonRelevantExpirience.content}
        hidenContent={data.nonRelevantExpirience.hidenContent}
      />
      <MainSection
        title={data.topProjects.title}
        content={data.topProjects.content}
        hidenContent={data.topProjects.hidenContent}
      />
    </main>
  );
};

export default Main;
