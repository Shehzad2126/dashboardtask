import MainContent from "./MainContent";

const MainContainer = () => {
  return (
    <div className="flex bg-customGray">
      <div className="flex-1 w-full py-6">
        <MainContent />
      </div>
    </div>
  );
};

export default MainContainer;
