import React from 'react'
import {userGrowthByRegion} from '../../data/chartData'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function UserBarChart() {
  return (
    <div className='bg-white shadow-md rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>User Growth by Region</h2>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={userGrowthByRegion}>
          <CartesianGrid strokeDasharray='6 6' />
          <XAxis dataKey='region' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='users' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
