import React from 'react'
import {deviceDistribution} from '../../data/chartData'
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function DevicePieChart() {
  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>Device Distribution</h2>
      <ResponsiveContainer width='100%' height={300}>
        <PieChart>
          <Pie
            data={deviceDistribution}
            dataKey='value'
            nameKey='name'
            cx='50%'
            cy='50%'
            outerRadius={80}
            fill='#8884d8'
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
