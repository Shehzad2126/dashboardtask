// import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import MainContainer from "./components/MainContainer/MainContainer";
// import RightSidebar from "./components/RightSidebar";

const App = () => (
  <div className="flex w-full">
    <div className="w-2/12">
      <LeftSidebar />
    </div>
    <div className="w-10/12">
      <MainContainer />
    </div>
  </div>
);

export default App;
