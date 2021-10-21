import "antd/dist/antd.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import SideBarComponent from "./components/sideBar/SideBar";
import HeaderComponent from "./components/commons/header/Header";
import Main from "./components/main/Main";
import data from "./API/api";
import { Layout, Row, Col } from "antd";

function App() {
  let appData = data;
  return (
    <Layout>
      <HeaderComponent />
      <Row>
        <Col span={4}>
          <SideBarComponent />
        </Col>
        <Col span={20}>
          <Main data={appData.en} />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
