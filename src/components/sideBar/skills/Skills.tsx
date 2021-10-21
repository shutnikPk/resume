import { Progress } from "antd";
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
            <div style={{ width: 170 }}>
              <span>{key}</span>
              <Progress percent={value} size="small" />
            </div>
            )
          }
        }
      )
    }
    </>
  );
};

export default Skills;
