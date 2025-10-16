"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CancellationTrendProps {}

const CancellationTrend = ({}: CancellationTrendProps) => {
  const data = [
    { month: 'Jan', avg: 10},
    { month: 'Feb', avg: 15},
    { month: 'Mar', avg: 5},
    { month: 'Apr', avg: 9},
    { month: 'May', avg: 12},
    { month: 'Jun', avg: 15},
    { month: 'Jul', avg: 4.5},
    { month: 'Aug', avg: 9.4},
    { month: 'Sep', avg: 8.3},
    { month: 'Oct', avg: 3.1},
    { month: 'Nov', avg: 1.2},
    { month: 'Dec', avg: 0.5},
  ];

  return (
    <div>
      <h3 className='text-xl mb-3 text-center'>Cancellation Trend</h3>
      <div className="w-full h-[var(--chart-height)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            layout="horizontal"
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line dataKey="avg" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default CancellationTrend;
