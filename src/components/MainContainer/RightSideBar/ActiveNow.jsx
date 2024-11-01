// import CustomCalendar from "./CalendarComponent";
import "react-calendar/dist/Calendar.css";
// import SearchField from "./SearchField";
import TodayTask from "./TodayTask";

const RightSidebar = () => {
  return (
    <div className="w-full p-5 space-y-6">
      <div className="p-4 bg-white rounded-lg ">
        <h3 className="mb-4 font-semibold">Task Today</h3>
        <img
          src="https://s3-alpha-sig.figma.com/img/c646/cd8c/9e05cf0339e081b33cfa12c1b8e20492?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QW1uEJSIN77sAdYuFXV3j4mEQLIVKfEtDXKo3ozBnYP8zXEIfAxtn0kdVT37-womohDpma6SPdiW346mwMqmnXSUNw58fZ03ymde8eVDgEmSsi3kBWZtaY7BqeIrc2OsNkz-YmPEIolf-grET3eVL~XiERh6~GI6Bn9yfLK7SBOiJdujEbTIRpXnAd~yLBYjP-EolYgaQvYs0EApQNluNkhPXPQcsD2nQY~vdu7HyKZTP7GtUU9kV8ynOUziCgW1loAcemcqHtIxPam11jIOheNETARVpEC99pd8BLmHAyWCoEKd1ptYvpZ3gbnmYPMd-lsCkB3TIJ7c8I~U-eixDw__"
          alt="Task"
          className="w-full mb-4 rounded-lg h-52"
        />
        <h4 className="text-lg font-semibold">IMPLEMENT Remote Work Policy</h4>
        <p className="text-sm text-gray-500">Workforce Planning Analyst</p>

        <TodayTask />
      </div>

      {/* Detail Task */}
    </div>
  );
};

export default RightSidebar;
