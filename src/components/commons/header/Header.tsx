import React, { FC } from "react";
import { Layout, Menu, Row, Col } from "antd";
const { Header } = Layout;

interface HeaderComponentProps {}
const HeaderComponent: FC<HeaderComponentProps> = () => {
  return (
    <>
      <Layout>
        <Header className="header">
          <Row justify="space-between">
            <Col span={14}>
              <div className="logo">
                <h1>
                  <a href="https://github.com/shutnikPk" className="main-text">
                    Junior/Trainee FrontEnd Developer{" "}
                  </a>
                  <a href="https://github.com/shutnikPk" className="git-icon">
                    <i className="fa fa-github"></i>
                  </a>
                </h1>
              </div>
            </Col>
            <Col span={3}>
              <Menu
                theme="dark"
                className="col"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
              >
                <Menu.Item key="1">
                  <span className="" style={{ cursor: "pointer" }}>
                    <u>RU</u>
                  </span>
                </Menu.Item>
                {/* <span className=""> / </span> */}
                <Menu.Item key="2">
                  <span className="" style={{ cursor: "pointer" }}>
                    <u>EN</u>
                  </span>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </Layout>
    </>
  );
};

export default HeaderComponent;
