import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/commons/header/Header";

function App() {
  return (
    <>
      <div className="row d-flex" style={{ maxWidth: 750 }}>
        <Header />
        <div className="col-3 bg-info">
          <SideBar />
        </div>
        <div className="col-9"></div>
      </div>
    </>
  );
}

export default App;
