import { GoHome } from "react-icons/go";
import { PiImagesSquare } from "react-icons/pi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserFriends, FaTags, FaRegIdBadge } from "react-icons/fa";
import { BiMessageSquareDetail, BiBell, BiHelpCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/tabSlice";

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

  const tabs = [
    {
      name: "Dashboard",
      icon: <GoHome style={{ width: "20px", height: "19.5px" }} />,
    },
    {
      name: "Clients",
      icon: <FaRegIdBadge style={{ width: "17px", height: "17px" }} />,
    },
    {
      name: "Proposals",
      icon: <FaTags style={{ width: "23px", height: "18px" }} />,
    },
    {
      name: "Projects",
      icon: <FaUserFriends style={{ width: "21px", height: "21px" }} />,
    },
    {
      name: "Team",
      icon: <PiImagesSquare style={{ width: "20px", height: "20px" }} />,
    },
    {
      name: "Calendar",
      icon: (
        <IoCalendarClearOutline style={{ width: "17px", height: "17px" }} />
      ),
    },
    {
      name: "Report",
      icon: <BsGraphUpArrow style={{ width: "14px", height: "14px" }} />,
    },
  ];

  return (
    <div className="fixed flex flex-col justify-between h-full pt-5 pb-5 pr-5 bg-white shadow-lg">
      <nav className="pt-10">
        <ul className="space-y-3">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`flex items-center space-x-3 p-2 cursor-pointer ${
                activeTab === tab.name
                  ? "bg-pink-100 text-teal-600 border-l-4 border-pink-600"
                  : "text-gray-700 hover:text-teal-600"
              }`}
              onClick={() => dispatch(setActiveTab(tab.name))}
            >
              <span className="text-xl">{tab.icon}</span>
              <span
                className={`font-medium ${
                  activeTab === tab.name ? "text-teal-600" : ""
                }`}
              >
                {tab.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto space-y-6">
        {/* Additional Icons */}
        <div className="flex justify-around text-2xl text-gray-700">
          <BiMessageSquareDetail
            style={{ width: "20px", height: "20px" }}
            className="cursor-pointer hover:text-teal-600"
          />
          <BiBell
            style={{ width: "18px", height: "22px" }}
            className="cursor-pointer hover:text-teal-600"
          />
          <BiHelpCircle
            style={{ width: "21px", height: "21px" }}
            className="cursor-pointer hover:text-teal-600"
          />
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-800">Unknown</p>
            <p className="text-sm text-teal-600">unknown@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
