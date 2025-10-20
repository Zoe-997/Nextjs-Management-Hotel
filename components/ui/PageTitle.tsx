"use client";
import React from "react";
import { usePathname } from "next/navigation";

export interface PageTitleProps {
  title: string;
  description?: string;
}

const PageTitle = ({ title, description }: PageTitleProps) => {
  const pathname = usePathname();

  const isH2 = pathname === "/" || pathname === "/admin";
  const HeadingTag = isH2 ? "h2" : "h1";

  return (
    <div>
      <HeadingTag className="text-2xl font-semibold">
        {title}
      </HeadingTag>
      {description && (
        <p className="text-gray-500 mt-1 text-sm">{description}</p>
      )}
    </div>
  );
};

export default PageTitle;