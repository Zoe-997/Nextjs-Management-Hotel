"use client";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const OccupancyTrend = (props) => {
  const data = [
    { month: "Jan", currentYear: 75, lastYear: 68 },
    { month: "Feb", currentYear: 80, lastYear: 72 },
    { month: "Mar", currentYear: 85, lastYear: 77 },
    { month: "Apr", currentYear: 70, lastYear: 65 },
    { month: "May", currentYear: 90, lastYear: 80 },
    { month: "Jun", currentYear: 88, lastYear: 79 },
    { month: "Jul", currentYear: 95, lastYear: 82 },
    { month: "Aug", currentYear: 95, lastYear: 82 },
    { month: "Sep", currentYear: 95, lastYear: 82 },
    { month: "Oct", currentYear: 80, lastYear: 75 },
    { month: "Nov", currentYear: 95, lastYear: 82 },
    { month: "Dec", currentYear: 120, lastYear: 82 },
  ];


  return (
    <div>
      <h3 className='text-xl mb-3 text-center'>Occupancy Trend</h3>
      <div className="w-full h-[var(--chart-height)]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="currentYear" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="lastYear" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default OccupancyTrend;
