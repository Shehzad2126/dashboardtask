import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "S", projects: 4, tasks: 1 },
  { name: "M", projects: 15, tasks: 10 },
  { name: "T", projects: 0, tasks: 0 },
  { name: "W", projects: 20, tasks: 14 },
  { name: "T", projects: 6, tasks: 4 },
  { name: "F", projects: 12, tasks: 10 },
  { name: "S", projects: 9, tasks: 7 },
];

// Custom Tooltip to show both tasks and projects
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const taskData = payload.find((item) => item.dataKey === "tasks");
    const projectData = payload.find((item) => item.dataKey === "projects");

    return (
      <div
        className="p-2 rounded-lg shadow-md"
        style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0" }}
      >
        {taskData && (
          <div className="flex items-center" style={{ color: "#10898F" }}>
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#10898F",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            ></span>
            <p className="text-sm">{`${taskData.value} Tasks`}</p>
          </div>
        )}
        {projectData && (
          <div className="flex items-center mt-1" style={{ color: "#C72C88" }}>
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                backgroundColor: "#C72C88",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            ></span>
            <p className="text-sm">{`${projectData.value} Projects`}</p>
          </div>
        )}
      </div>
    );
  }
  return null;
};

// Prop validation for CustomTooltip
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const ActivityChart = () => (
  <div className="max-w-md p-4 bg-white rounded-lg shadow">
    <div className="flex mb-1">
      <h3
        className="text-lg font-semibold text-gray-800"
        style={{ marginRight: "auto" }}
      >
        Activity
      </h3>
      <p className="text-gray-500">This Week</p>
    </div>
    <ResponsiveContainer width="100%" height={160}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
      >
        {/* Vertical Grid Lines Only */}
        <CartesianGrid vertical={true} horizontal={false} stroke="#e0e0e0" />

        {/* X-Axis */}
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#6B7280" }}
        />

        {/* Y-Axis */}
        <YAxis
          domain={[10, 30]} // Real data range as 10, 20, 30
          ticks={[10, 20, 30]} // Real data points
          tickFormatter={(value) => value / 10} // Display as 1, 2, 3
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6B7280" }}
        />

        {/* Tooltip */}
        <Tooltip content={<CustomTooltip />} />

        {/* Projects (Pink Line) */}
        <Line
          type="linear"
          dataKey="projects"
          stroke="#C72C88"
          strokeWidth={2}
          dot={(props) =>
            props.payload === props.activeDot
              ? { r: 5, fill: "#fff", strokeWidth: 2, stroke: "#C72C88" }
              : false
          }
          activeDot={{ r: 6, strokeWidth: 3, fill: "#C72C88", stroke: "#fff" }}
        />

        {/* Tasks (Teal Line) */}
        <Line
          type="linear"
          dataKey="tasks"
          stroke="#10898F"
          strokeWidth={2}
          dot={(props) =>
            props.payload === props.activeDot
              ? { r: 5, fill: "#fff", strokeWidth: 2, stroke: "#10898F" }
              : false
          }
          activeDot={{ r: 6, strokeWidth: 3, fill: "#10898F", stroke: "#fff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ActivityChart;

ActivityChart.propTypes = {
  activeDot: PropTypes.object,
  payload: PropTypes.array,
};
