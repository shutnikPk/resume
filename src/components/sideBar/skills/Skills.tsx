import React, { FC } from "react";
interface SkillsProps {
  skills: { [key: string]: number }[];
}
const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => {
        for (const [key, value] of Object.entries(skill)) {
          return (
            <div className="container m-1">
              <span>{key}</span>
              <div className="progress" key={key}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: `${value}%` }}
                >
                  {value + "%"}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Skills;
