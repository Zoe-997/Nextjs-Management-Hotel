"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { FaSmileBeam } from 'react-icons/fa';
import { FaFaceSadCry } from 'react-icons/fa6';

const data = [
  {
    month: "Jan",
    currentYear: 4000,
    lastYear: 2400,
    amt: 2400,
  },
  {
    month: "Feb",
    currentYear: 3000,
    lastYear: 1398,
    amt: 2210,
  },
  {
    month: "Mar",
    currentYear: 2000,
    lastYear: 9800,
    amt: 2290,
  },
  {
    month: "Apr",
    currentYear: 2780,
    lastYear: 3908,
    amt: 2000,
  },
  {
    month: "May",
    currentYear: 1890,
    lastYear: 4800,
    amt: 2181,
  },
  {
    month: "Jun",
    currentYear: 2390,
    lastYear: 3800,
    amt: 2500,
  },
  {
    month: 'Jul',
    currentYear: 3490,
    lastYear: 4300,
    amt: 2100,
  },
  {
    month: 'Aug',
    currentYear: 3490,
    lastYear: 4300,
    amt: 2100,
  },
  {
    month: 'Sep',
    currentYear: 3490,
    lastYear: 4300,
    amt: 2100,
  },
  {
    month: 'Oct',
    currentYear: 4500,
    lastYear: 5500,
    amt: 2100,
  },
  {
    month: 'Nov',
    currentYear: 3490,
    lastYear: 4300,
    amt: 2100,
  },
  {
    month: 'Dec',
    currentYear: 3590,
    lastYear: 4500,
    amt: 2100,
  }
];

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;

  if (value > 2500) {
    return (
      <FaFaceSadCry x={cx - 10} y={cy - 10} fill='red' size={20} />
    );
  }

  return (
    <FaSmileBeam x={cx - 10} y={cy - 10} fill='green' size={20} />
  );
};

const RevenueGrowthChart = () => {
  return (
    <div>
      <h3 className='text-xl mb-3 text-center'>Revenue Growth</h3>
      <div className="w-full h-[var(--chart-height)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <Legend />
            <Line type="monotone" dataKey="lastYear" stroke="#8884d8" name='Last year' />
            <Line type="monotone" dataKey="currentYear" stroke="#82ca9d" name='Current year' dot={<CustomizedDot />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGrowthChart;