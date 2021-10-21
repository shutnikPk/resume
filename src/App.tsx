import "antd/dist/antd.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import SideBarComponent from "./components/sideBar/SideBar";
import HeaderComponent from "./components/commons/header/Header";
import Main from "./components/main/Main";
import data from "./API/api";
import { Layout } from "antd";

function App() {
  let appData = data;
  return (
    <Layout>
      <HeaderComponent />
      <SideBarComponent />
      <Main data={appData.en} />
    </Layout>
  );
}

export default App;
