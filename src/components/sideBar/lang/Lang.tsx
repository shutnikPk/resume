import React, { FC } from "react";
interface LanguagesProps {
  lang: { [key: string]: string }[];
}

const Languages: FC<LanguagesProps> = ({ lang }) => {
  return (
    <>
      {lang.map((l) => {
        for (const [key, value] of Object.entries(l)) {
          return (
            <div className="" key={key}>
              <span className="">{key}</span>
              <div className="" key={key}>
                <div
                  className=""
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: `${50}%` }}
                >
                  {value}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Languages;
