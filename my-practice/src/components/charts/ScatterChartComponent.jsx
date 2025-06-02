import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const scatterData = [
  { x: 100, y: 200 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
  { x: 140, y: 250 },
  { x: 150, y: 400 },
];

export default function ScatterChartComponent() {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Conversion vs Ad Spend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Ad Spend" unit="$" />
          <YAxis type="number" dataKey="y" name="Conversions" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={scatterData} fill="#ef4444" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}