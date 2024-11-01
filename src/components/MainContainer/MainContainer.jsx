import MainContent from "./MainContent";

const MainContainer = () => {
  return (
    <div className="flex bg-customGray">
      {/* Main Content Area */}
      <div className="flex-1 w-full py-6">
        <MainContent />
      </div>

      {/* Right Sidebar */}
      {/* <div className="w-5/12 py-6">
        <RightSidebar />
      </div> */}
    </div>
  );
};

export default MainContainer;
