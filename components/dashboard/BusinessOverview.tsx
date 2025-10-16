"use client";
import React from "react";

export interface BusinessOverviewProps {
  items?: Array<{ title: string; value: string | number }>;
}

const BusinessOverview = ({ items }: BusinessOverviewProps) => {
  return (
    <div className="flex flex-col gap-3 bg-[var(--sidebar-background)] p-5 rounded-2xl">
      <h2 className="uppercase font-[var(--font-heading)] text-xl">Business Overview</h2>
      <table className="table-auto border-collapse border border-[var(--color-border)] w-full text-sm">
        <thead>
          <tr>
            {items?.map((item, index) => (
              <th
                key={index}
                className="p-2 border border-[var(--color-border)] text-center font-semibold"
              >
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {items?.map((item, index) => (
              <td
                key={index}
                className="p-2 border border-[var(--color-border)] text-center"
              >
                {item.value}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

    </div>
  )
};

export default BusinessOverview;
