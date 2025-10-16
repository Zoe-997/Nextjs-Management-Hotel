"use client";
import React from "react";

export interface PropertyMetricsProps {
  items?: Array<{ title: string; value: string | number }>;
}

const PropertyMetrics = ({ items }: PropertyMetricsProps) => {
  return (
    <div className="flex flex-col gap-3 bg-[var(--sidebar-background)] p-5 rounded-2xl">
      <h2 className="uppercase font-[var(--font-heading)] text-xl">Property Metrics</h2>
      <table className="table-auto border-collapse border border-[var(--color-border)]">
        <thead>
          <tr>
            {items?.map((item, index) => (
              <React.Fragment key={index}>
                <th className="p-2 border border-[var(--color-border)] text-center">{item.title}</th>
              </React.Fragment> 
            ))}  
          </tr>
        </thead>
        <tbody>
          <tr>
            {items?.map((item, index) => (
              <React.Fragment key={index}>
                <td className="p-2 border border-[var(--color-border)] text-center">{item.value}</td>
              </React.Fragment> 
            ))}  
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default PropertyMetrics;
