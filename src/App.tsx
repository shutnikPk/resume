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
        <Col>
          <Row>
            <HeaderComponent />
          </Row>
          <Row>
            <Col md={4} sm={24} style={{flex:"1 0 0"}}>
              <SideBarComponent />
            </Col>
            <Col md={20} sm={24}>
              <Main data={appData.en} />
            </Col>
          </Row>
        </Col>
    </Layout>
  );
}

export default App;
