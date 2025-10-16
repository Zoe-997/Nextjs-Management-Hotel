"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronDoubleRight } from 'react-icons/bs';

interface BreadcrumbProps {
  items?: { label: string; href?: string }[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  const pathname = usePathname();

  // Nếu không truyền `items` => tự động tách từ URL
  const segments =
    items ||
    pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, arr) => ({
        label: decodeURIComponent(segment.replace(/-/g, " ")),
        href: "/" + arr.slice(0, index + 1).join("/"),
      }));
  
  if (pathname === "/") {
    return (
      <div className="text-sm">
        Home
      </div>
    );
  }

  // Nếu chỉ là "/admin"
  if (pathname === "/admin") {
    return (
      <div className="text-sm">
        Admin
      </div>
    );
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm ${className || ""}`}
    >
      <Link href="/" className="hover:text-gray-800 transition">
        Home
      </Link>

      {segments.map((seg, i) => (
        <React.Fragment key={i}>
          <BsChevronDoubleRight size={14} className="mx-1 text-gray-400" />
          {i === segments.length - 1 ? (
            <span className="text-gray-800 font-medium capitalize">
              {seg.label}
            </span>
          ) : (
            <Link
              href={seg.href ?? "#"}
              className="hover:text-gray-800 capitalize transition"
            >
              {seg.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;