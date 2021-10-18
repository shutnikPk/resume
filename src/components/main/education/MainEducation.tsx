import React, { FC } from "react";
interface MainEducationProps {
  disp: string;
}

const MainEducation: FC<MainEducationProps> = ({ disp }) => {
  return (
    <p style={{ display: disp }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
      veritatis ullam exercitationem neque odit dolore optio asperiores
      obcaecati tempora sint velit quasi dignissimos delectus ut modi officia?
      Eligendi natus quidem illum vero, totam placeat! Aperiam distinctio,
      incidunt culpa ducimus esse facere corrupti reiciendis tempore voluptas
      saepe nihil enim suscipit illo maiores quod impedit nostrum labore modi
      recusandae. Non quibusdam eum officiis cupiditate beatae? Esse sunt omnis
      nulla! Cupiditate nulla assumenda esse sunt consectetur illum iste placeat
      officiis excepturi commodi, fugiat odit deleniti sint ipsa harum
      repellendus eveniet maxime quod voluptate, facere blanditiis distinctio
      quia! Suscipit at mollitia eos alias sequi?
    </p>
  );
};

export default MainEducation;
