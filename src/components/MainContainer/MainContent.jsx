import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import Client from "./Clients";
import Projects from "./Projects";
import Poposal from "./Proposal";
import Reports from "./Reports";
import Team from "./Team";
import Calender from "./Calender";

const MainContent = () => {
  const activeTab = useSelector((state) => state.tab.activeTab);

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Clients":
        return <Client />;
      case "Proposals":
        return <Poposal />;
      case "Projects":
        return <Projects />;
      case "Team":
        return <Team />;
      case "Calendar":
        return <Calender />;
      case "Report":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex-grow overflow-y-auto">
      {/* <h1 className="mb-4 text-2xl font-semibold">{activeTab}</h1> */}
      {renderContent()}
    </div>
  );
};

export default MainContent;
