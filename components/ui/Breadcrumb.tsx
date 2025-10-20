"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdNavigateNext } from 'react-icons/md';

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

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm ${className || ""}`}
    >
      <Link href="/" className="hover:text-[var(--color-link-hover)] transition">
        Home
      </Link>

      {segments.map((seg, i) => (
        <React.Fragment key={i}>
          <MdNavigateNext size={14} className="mx-1 text-[var(--color-link-hover)]" />
          {i === segments.length - 1 ? (
            <span className="text-[var(--color-link-hover)] font-medium capitalize">
              {seg.label}
            </span>
          ) : (
            <Link
              href={seg.href ?? "#"}
              className="hover:text-[var(--color-link-hover)] capitalize transition"
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