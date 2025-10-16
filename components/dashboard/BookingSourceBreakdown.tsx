"use client";
import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface BookingSourceBreakdownProps {}


const BookingSourceBreakdown = ({}: BookingSourceBreakdownProps) => {
  const data = [
    { name: "OTA (Agoda, Airbnb...)", value: 55 },
    { name: "Website", value: 30 },
    { name: "Offline / Walk-in", value: 15 },
  ];

  const RADIAN = Math.PI / 180;
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <h3 className='text-xl mb-3 text-center'>Occupancy Trend</h3>
      <div className='w-[calc(var(--chart-height)*1.5)] h-[var(--chart-height)] mx-auto'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              iconType="square"
              iconSize={20}
              wrapperStyle={{
                fontSize: '14px',
                color: '#444'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
};

export default BookingSourceBreakdown;
