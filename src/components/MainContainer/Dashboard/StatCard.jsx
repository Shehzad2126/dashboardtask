import PropTypes from "prop-types";
import { TbPencil } from "react-icons/tb";

const StatCard = ({ title, value, percentage, icon, color }) => {
  return (
    <div className="flex flex-col justify-between w-48 p-4 mr-3 bg-white rounded-lg ">
      {/* Icon and Title */}
      <div className="flex items-center space-x-2">
        <div
          className="flex items-center justify-center rounded-full p-13"
          style={{ backgroundColor: color, width: "30px", height: "30px" }}
        >
          <span className="text-sm text-white">
            <TbPencil style={{ width: "13px", height: "13px" }} />
          </span>
        </div>
        <span className="text-sm font-medium text-gray-500">{title}</span>
      </div>

      <div className="flex items-center justify-between mt-2">
        <h2 className="text-xl font-semibold text-gray-800">{value}</h2>
        <div className="px-2 py-1 bg-gray-100 rounded-full">
          <span className="text-sm font-semibold" style={{ color: color }}>
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
};

StatCard.defaultProps = {
  percentage: 0,
  color: "#10898F",
};

export default StatCard;
