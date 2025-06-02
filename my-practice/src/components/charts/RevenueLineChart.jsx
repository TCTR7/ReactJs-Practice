
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { revenueByMonth } from "../../data/chartData"; // Assuming you have a data file with revenue data

export default function RevenueLineChart() {
  const dataMax = Math.max(...revenueByMonth.map((item) => item.revenue));
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Revenue Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueByMonth}>
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey="month" />
          <YAxis
            allowDecimals={false}
            domain={[0, Math.ceil(dataMax / 3000) * 3000]}
            tickCount={Math.ceil(dataMax / 3000) + 1}
            tickFormatter={(value) => new Intl.NumberFormat().format(value)}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
