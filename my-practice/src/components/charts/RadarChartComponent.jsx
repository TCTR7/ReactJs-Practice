import React from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Legend,
    ResponsiveContainer
} from 'recharts'

const radarData = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
];

export default function RadarChartComponent() {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Feature Comparison</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={radarData} outerRadius={90}>
          <PolarGrid />
          <PolarAngleAxis dataKey="feature" />
          <PolarRadiusAxis />
          <Radar dataKey="score" stroke="#10b981" fill="#6ee7b7" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
