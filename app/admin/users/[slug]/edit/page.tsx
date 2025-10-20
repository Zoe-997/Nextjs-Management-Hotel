"use client";  
import React from "react";
import Link from "next/link";
import { userProps } from "@/components/dashboard/UserCard";

import { RiArrowGoBackLine } from 'react-icons/ri';
import { BiSolidSave } from 'react-icons/bi';

const UserEdit = () => {
  const user = {
    customerType: 'VVIP',
    id: 1,
    name: 'Zoe Trinh',
    email: 'thuminh10011997@gmail.com',
    phone: '(+84) 833 251 098',
    address: 'Ha Noi',
    birthday: '10/01/1997',
    role: 'ADMIN' as const,
    handle: 'zoe-trinh'
  };

  return (
    <div className="py-20">
      <h2 className="text-3xl font-[family-name:--font-heading] text-center">Edit User: {user.name}</h2>
      <ul className="text-lg">
        {Object.entries(user).map(([key, value]) => (
          <li key={key} className="py-3 flex gap-5 border-b-[1px] border-dashed border-[var(--color-border)] last:border-0">
            <span className="capitalize min-w-[100px]">{key}:</span>
            <span>{String(value)}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 mt-10 text-lg">
        <button className="cursor-pointer text-[var(--color-primary-button-text)] bg-[var(--color-primary-button)] hover:text-[var(--color-primary-button-text-hover)] hover:bg-[var(--color-primary-button-hover)] px-5 py-3 flex items-center gap-3 rounded-lg transition">
          <BiSolidSave size={20} />
          <span>Save change</span>
        </button>
        <Link href='/admin/users' className="flex items-center gap-1 hover:text-[var(--color-link-hover)] transition">
          <RiArrowGoBackLine size={20} />
          <span>Back</span>
        </Link>
      </div>
    </div>
  )
};

export default UserEdit;
