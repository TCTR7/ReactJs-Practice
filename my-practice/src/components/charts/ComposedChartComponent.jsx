import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const composedData = [
  { month: 'Jan', revenue: 4000, growth: 2400 },
  { month: 'Feb', revenue: 3000, growth: 1398 },
  { month: 'Mar', revenue: 5000, growth: 2800 },
  { month: 'Apr', revenue: 4780, growth: 3908 },
];

export default function ComposedChartComponent() {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Revenue vs Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={composedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" barSize={20} fill="#6366f1" />
          <Line type="monotone" dataKey="growth" stroke="#f59e0b" strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}