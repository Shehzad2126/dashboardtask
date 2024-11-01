import { FaClock } from "react-icons/fa";

const TodayTask = () => {
  const progressPercentage = 90;
  const timeEstimate = "1 Hour";
  const avatars = [
    "https://avatar.iran.liara.run/public/36",
    "https://avatar.iran.liara.run/public/10",
    "https://avatar.iran.liara.run/public/24",
    "https://avatar.iran.liara.run/public/35",
    "https://avatar.iran.liara.run/public/13",
  ];

  return (
    <div className="w-full p-4 bg-white">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-gray-800">Progress</span>
          <span className="font-semibold text-teal-600">
            {progressPercentage}%
          </span>
        </div>

        <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-teal-600 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Time Estimate and Avatars */}
        <div className="flex items-center justify-between">
          {/* Time Estimate */}
          <div className="flex items-center text-gray-700">
            <FaClock className="mr-2 text-teal-600" />
            <span>{timeEstimate}</span>
          </div>

          {/* Avatars */}
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="User"
                className="w-8 h-8 border-2 border-white rounded-full shadow"
              />
            ))}
          </div>
        </div>
        <div className="w-full my-6 border-t border-gray-200"></div>
        <h4 className="mb-4 text-lg font-semibold">Detail Task</h4>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <div className="w-6 h-6 text-sm text-center text-gray-800 bg-gray-200 rounded-full">
              1
            </div>
            <span>Draft Remote Work Policy</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-6 h-6 text-sm text-center text-gray-800 bg-gray-200 rounded-full">
              2
            </div>
            <span>Review Legal and Compliance Requirements</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-6 h-6 text-sm text-center text-gray-800 bg-gray-200 rounded-full">
              3
            </div>
            <span>Conduct Employee Training on Remote Work Best Practices</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodayTask;
