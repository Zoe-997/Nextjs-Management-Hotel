import React from "react";

interface MenuProps {
  size: string;
  type: 'vertical' | 'horizontal';
  items: Array<{
    title: string;
    icon?: React.ReactNode;
    href: string;
  }>;
}

const Menu = ({size, type, items}: MenuProps) => {
  const grid = type === 'vertical' ? 'flex flex-col gap-4 py-5' : 'flex flex-row gap-4';
  const spacing = type === 'vertical' ? 'py-2 px-5' : 'py-1 px-3';

  return (
    <ul className={`${grid}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3 text-lg hover:text-white cursor-pointer">
          <a href={item.href} className={`flex items-center gap-3 ${spacing} hover:text-[var(--color-link-hover)] text-[var(--color-link)] transition`}
            style={{ fontSize: size }}
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
};

export default Menu;
