import Text from "antd/lib/typography/Text";
import React, { FC } from "react";
interface SideBarTitleProps {
  title: string;
}

const SideBarTitle: FC<SideBarTitleProps> = ({ title }) => {
  return (
    <Text strong={true}>{ title }</Text>
  );
};

export default SideBarTitle;
