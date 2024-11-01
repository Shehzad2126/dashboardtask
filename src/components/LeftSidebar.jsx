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
      icon: <GoHome />,
    },
    {
      name: "Clients",
      icon: <FaRegIdBadge />,
    },
    {
      name: "Proposals",
      icon: <FaTags />,
    },
    {
      name: "Projects",
      icon: <FaUserFriends />,
    },
    {
      name: "Team",
      icon: <PiImagesSquare />,
    },
    {
      name: "Calendar",
      icon: <IoCalendarClearOutline />,
    },
    {
      name: "Report",
      icon: <BsGraphUpArrow />,
    },
  ];

  return (
    <div className="fixed flex flex-col justify-between h-full pt-5 pb-5 pr-5 bg-white ">
      <nav className="pt-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`flex items-center space-x-3 p-1 cursor-pointer ${
                activeTab === tab.name
                  ? "bg-pink-100 text-teal-600 border-l-4 border-pink-600"
                  : "text-gray-700 hover:text-teal-600"
              }`}
              onClick={() => dispatch(setActiveTab(tab.name))}
            >
              <span className="text-sm">{tab.icon}</span>
              <span
                className={`text-xs font-semibold ${
                  activeTab === tab.name ? "text-teal-600" : ""
                }`}
              >
                {tab.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto space-y-3">
        {/* Additional Icons */}
        <div className="flex justify-around text-2xl text-gray-700">
          <BiMessageSquareDetail
            style={{ width: "15px", height: "15px" }}
            className="cursor-pointer hover:text-teal-600"
          />
          <BiBell
            style={{ width: "15px", height: "15px" }}
            className="cursor-pointer hover:text-teal-600"
          />
          <BiHelpCircle
            style={{ width: "15px", height: "15px" }}
            className="cursor-pointer hover:text-teal-600"
          />
        </div>

        {/* User Profile */}
        <div className="flex items-center justify-center px-3 space-x-1">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Unknown</p>
            <p className="text-xs text-teal-600">unknown@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
