"use client";
import React from "react";

export interface AnalyticsCardsProp {
  items: Array<{
    title: string;
    icon: React.ReactNode;
    value: number;
    trend?: 'up' | 'down' | null;
    percentage?: number | null;
  }>;
}

const AnalyticsCards = ({ items }: AnalyticsCardsProp) => {
  return (
    <ul className="grid grid-cols-4 gap-7">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3 rounded-2xl bg-[var(--sidebar)] px-5 py-3">
          <span className="bg-[#1B254B] rounded-full p-4">{item.icon}</span>
          <div>
            <span className="text-[#A3AED0] text-sm">{item.title}</span>
            <h3 className="flex gap-2 items-end">
              <span className="text-white text-2xl font-bold leading-[24px]">{item.value}</span>
              {item.trend && item.trend != null && 
                <span className={`${item.trend == 'down' ? 'text-[#c70a0a]' : 'text-[#01B574]'} text-[12px] flex items-center gap-[2px]`}>
                  <span>{item.trend == 'down' ? '-' : '+'}</span>
                  <span>{item.percentage}%</span>
                </span>
              }
            </h3>
          </div>
        </li>
      ))}
      
    </ul>
  )
};

export default AnalyticsCards;
