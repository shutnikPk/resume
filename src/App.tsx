import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/commons/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <div className="row d-flex" style={{ maxWidth: 850 }}>
        <Header />
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
