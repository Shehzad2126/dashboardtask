import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dayjs from "dayjs";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const years = Array.from({ length: 101 }, (_, i) => dayjs().year() - 100 + i);

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(currentDate.date());
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const today = dayjs();

  const getWeekDays = (date) => {
    const startOfWeek = date.startOf("week");
    return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
  };

  const handlePrevWeek = () => {
    setCurrentDate(currentDate.subtract(1, "week"));
  };

  const handleNextWeek = () => {
    setCurrentDate(currentDate.add(1, "week"));
  };

  const handleMonthClick = () => {
    setShowMonthDropdown(!showMonthDropdown);
    setShowYearDropdown(false);
  };

  const handleYearClick = () => {
    setShowYearDropdown(!showYearDropdown);
    setShowMonthDropdown(false);
  };

  const handleMonthSelect = (monthIndex) => {
    setCurrentDate(currentDate.month(monthIndex).startOf("month"));
    setShowMonthDropdown(false);
  };

  const handleYearSelect = (year) => {
    setCurrentDate(currentDate.year(year).startOf("week"));
    setShowYearDropdown(false);
  };

  const weekDays = getWeekDays(currentDate);

  return (
    <div className="w-full h-auto max-w-xs px-4 py-1 bg-white rounded-lg">
      <div className="flex items-center justify-between py-1 mb-1 text-gray-800">
        <button onClick={handlePrevWeek}>
          <FaChevronLeft className="text-gray-500" />
        </button>
        <div className="relative inline-flex space-x-2">
          <span
            className="text-sm font-semibold text-gray-800 cursor-pointer"
            onClick={handleMonthClick}
          >
            {currentDate.format("MMM")}
          </span>
          {showMonthDropdown && (
            <div className="absolute left-0 z-10 overflow-y-auto bg-white border rounded shadow-lg top-full max-h-40">
              {months.map((month, index) => (
                <div
                  key={month}
                  onClick={() => handleMonthSelect(index)}
                  className="px-4 py-1 cursor-pointer hover:bg-teal-100"
                >
                  {month}
                </div>
              ))}
            </div>
          )}
          <span
            className="text-sm font-semibold text-gray-800 cursor-pointer"
            onClick={handleYearClick}
          >
            {currentDate.format("YYYY")}
          </span>
          {showYearDropdown && (
            <div className="absolute right-0 z-10 overflow-y-auto bg-white border rounded shadow-lg top-full max-h-40">
              {years.map((year) => (
                <div
                  key={year}
                  onClick={() => handleYearSelect(year)}
                  className="px-4 py-1 cursor-pointer hover:bg-teal-100"
                >
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={handleNextWeek}>
          <FaChevronRight className="text-gray-500" />
        </button>
      </div>

      {/* Dates */}
      <div className="flex justify-between py-1 mt-1 gap-x-1">
        {weekDays.map((day) => (
          <div
            key={day.date()}
            className={`flex flex-col py-1 items-center ${
              day.isSame(today, "day")
                ? "border-2 border-teal-600 rounded-full p-0.5"
                : ""
            }`}
          >
            <span className="py-3 text-xs font-medium text-gray-500">
              {day.format("dd")[0]}
            </span>
            <button
              onClick={() => setSelectedDate(day.date())}
              className={`flex items-center justify-center w-6 h-6 rounded-full text-sm ${
                selectedDate === day.date() && currentDate.isSame(day, "month")
                  ? "bg-teal-600 text-white"
                  : day.isSame(today, "day")
                  ? "text-teal-600 bg-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {day.date()}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCalendar;
