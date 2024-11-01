import StatCard from "./StatCard";
import { FaTasks, FaProjectDiagram, FaDollarSign } from "react-icons/fa";
import Activity from "./Activity";
import SearchField from "./SearchField";
import TodayTask from "./TodayTask";
import Proposals from "./Proposals";
import CalendarComponent from "./CalendarComponent";
const Dashboard = () => {
  return (
    <div className="p-4 space-y-6 ">
      <div className="flex items-center justify-between w-full mb-8">
        <div className="w-2/3">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        </div>

        <div className="w-1/2 pl-20 ">
          <SearchField />
        </div>
      </div>

      <div className="flex items-start justify-between mb-8 space-x-6">
        <div
          className="flex-1 w-2/3 p-6 mr-16 text-white rounded-lg "
          style={{ backgroundColor: "rgba(16, 137, 143, 1)" }}
        >
          <h1 className="text-2xl font-bold">Hello, Jack</h1>
          <p>7 new projects are waiting for you</p>
          <div className="w-full h-2 mt-4 bg-gray-300 rounded-full">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span>Status</span>
            <span>120/127</span>
          </div>
        </div>

        <div className="w-1/3 ml-10 border-l-indigo-600">
          <CalendarComponent />
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="w-2/3 ">
          <div className="flex justify-center pr-12 ">
            <StatCard
              title="Today's Tasks"
              value={15}
              percentage={70}
              icon={<FaTasks />}
              color="rgba(16, 137, 143, 1)"
            />
            <StatCard
              title="Total Projects"
              value={127}
              percentage={80}
              icon={<FaProjectDiagram />}
              color="rgba(199, 44, 136, 1)"
            />
            <StatCard
              title="Total Earnings"
              value="$12000"
              percentage={60}
              icon={<FaDollarSign />}
              color="rgba(16, 137, 143, 1)"
            />
          </div>
          <div className="min-h-screen py-6">
            <Activity />
            <Proposals />
          </div>
          <div className="min-h-screen "></div>
        </div>
        <div className="w-1/2">
          <div className="p-4 mx-5 bg-white rounded-lg shadow-lg ">
            <h3 className="mb-4 font-semibold">Task Today</h3>
            <img
              src="https://s3-alpha-sig.figma.com/img/c646/cd8c/9e05cf0339e081b33cfa12c1b8e20492?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QW1uEJSIN77sAdYuFXV3j4mEQLIVKfEtDXKo3ozBnYP8zXEIfAxtn0kdVT37-womohDpma6SPdiW346mwMqmnXSUNw58fZ03ymde8eVDgEmSsi3kBWZtaY7BqeIrc2OsNkz-YmPEIolf-grET3eVL~XiERh6~GI6Bn9yfLK7SBOiJdujEbTIRpXnAd~yLBYjP-EolYgaQvYs0EApQNluNkhPXPQcsD2nQY~vdu7HyKZTP7GtUU9kV8ynOUziCgW1loAcemcqHtIxPam11jIOheNETARVpEC99pd8BLmHAyWCoEKd1ptYvpZ3gbnmYPMd-lsCkB3TIJ7c8I~U-eixDw__"
              alt="Task"
              className="w-full mb-4 rounded-lg h-52"
            />
            <h4 className="text-lg font-semibold">
              IMPLEMENT Remote Work Policy
            </h4>
            <p className="text-sm text-gray-500">Workforce Planning Analyst</p>

            <TodayTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
