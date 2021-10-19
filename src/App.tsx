import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/commons/header/Header";
import Main from "./components/main/Main";
import data from "./API/api";

function App() {
  let appData = data;
  return (
    <div
      className="row d-flex  bg-white"
      style={{ maxWidth: 850, height: 100 + "vh" }}
    >
      <Header />
      <SideBar />
      <Main data={appData.en} />
    </div>
  );
}

export default App;
