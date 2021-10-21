import { Progress, Row } from "antd";
import Text from "antd/lib/typography/Text";
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
            <Row className="row-justify-center">
            <div className="progress-component" style={{ width: 110 }}>
              <Text>{key}</Text>
              <Progress percent={value} size="small" />
            </div>
            </Row>
            )
          }
        }
      )
    }
    </>
  );
};

export default Skills;
