import React, { FC } from "react";
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-primary">
      <p>This is the end</p>
    </footer>
  );
};

export default Footer;
