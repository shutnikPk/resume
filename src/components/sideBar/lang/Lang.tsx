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
            <div className="p-0 m-1" key={key}>
              <span className="m-1 fs-5 text fw-bolder">{key}</span>
              <div className="progress" key={key}>
                <div
                  className="progress-bar"
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
