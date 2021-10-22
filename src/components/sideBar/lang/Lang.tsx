import { Progress, Row, Col } from "antd";
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
            <Row key={key} className="row-justify-center">
                <div className="progress-component">
                  <Text>
                    {key}, {value}
                  </Text>
                  <Progress percent={50} showInfo={false} size="small" />
                </div>
            </Row>
          );
        }
      })}
    </>
  );
};

export default Languages;
