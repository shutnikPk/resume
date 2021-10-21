import { Progress, Row } from "antd";
import Text from "antd/lib/typography/Text";
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
          <Row className="row-justify-center">
            <div className="progress-component" style={{ width: 110 }}>
              <Text>{key}</Text>
              <Progress percent={50} showInfo={false} size="small" /><span>{value}</span>
            </div>
          </Row>

          );
        }
      })}
    </>
  );
};

export default Languages;
