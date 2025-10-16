"use client";
import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


interface AverageStayDurationProps {}

const AverageStayDuration = ({}: AverageStayDurationProps) => {
  const data = [
    { month: "Jan", nights: 2.5 },
    { month: "Feb", nights: 3.2 },
    { month: "Mar", nights: 2.8 },
    { month: "Apr", nights: 3.6 },
    { month: "May", nights: 4.1 },
    { month: "Jun", nights: 3.9 },
    { month: "Jul", nights: 2.5 },
    { month: "Aug", nights: 3.9 },
    { month: "Sep", nights: 3 },
    { month: "Oct", nights: 2.2 },
    { month: "Nov", nights: 3.1 },
    { month: "Dec", nights: 5 },
  ];


  return (
    <div>
      <h3 className='text-xl mb-3 text-center'>Average Stay Duration</h3>
      <div className="w-full h-[var(--chart-height)]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="nights" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default AverageStayDuration;
