import Link from "next/link";
import React from "react";

interface CopyrightProps {
  store: {
    name: string;
  }
}

const Copyright = ({ store }: CopyrightProps) => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="text-center text-sm text-[var(--color-link-hover)]">
      <span>© {thisYear}</span>
      <Link href="/" className="hover:underline ml-1">
        {store.name}
      </Link>
      <span>. All Rights Reserved.</span>
    </div>
  )
};

export default Copyright;
