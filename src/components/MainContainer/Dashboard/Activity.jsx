import ActivityChart from "./ActivityChart";

// import { FiChevronDown } from "react-icons/fi";

const ActivityAndActiveNow = () => {
  // Sample data for "Active Now" section
  const activeUsers = [
    {
      name: "Ryan Thompson",
      role: "Lead Strategist",
      timeSpent: "30 mins",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ryan Thompson",
      role: "Lead Strategist",
      timeSpent: "58 mins",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <div className="flex ">
      {/* Activity Chart */}
      <div className="w-6/12 rounded-lg ">
        <ActivityChart />
      </div>

      {/* Active Now Section */}
      <div className="w-1/2 px-4 py-1 rounded-lg ">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Active Now</h2>
          <a href="#" className="text-sm text-teal-600 hover:underline">
            View All &rarr;
          </a>
        </div>
        <div className="max-w-xs space-y-4 pl-7">
          {activeUsers.map((user, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between p-4 pl-5 bg-white shadow-sm rounded-xl"
            >
              <div className="flex items-center">
                <div className="relative mr-3 -ml-12">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 border rounded-full shadow-md"
                  />
                  <span
                    className="absolute top-0 right-0 w-3 h-3 bg-teal-500 border-2 border-white rounded-full"
                    style={{ transform: "translate(25%, -25%)", zIndex: 10 }}
                  ></span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-pink-600">
                  {user.timeSpent}
                </p>
                <p className="text-xs text-pink-400">Time Spent</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityAndActiveNow;
