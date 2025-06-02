import React from 'react'
import {weeklyEngagement} from '../../data/chartData'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
}
from 'recharts'

export default function EngagementAreaChart() {
  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>Weekly Engagement</h2>
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={weeklyEngagement}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='day' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='engagement' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
