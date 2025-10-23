"use client";  
import React from "react";
import Link from "next/link";
import { userProps } from "@/components/dashboard/UserCard";

import { RiArrowGoBackLine } from 'react-icons/ri';
import { BiSolidSave } from 'react-icons/bi';
import CustomerType from "@/components/dashboard/CustomerType";

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
        {Object.entries(user).map(([key, value]) => {

          return (
            <li key={key} className="py-3 flex gap-5 items-center border-b-[1px] border-dashed border-[var(--color-border)] last:border-0 first:border-0">
              {key !== 'customerType' && <label className="capitalize min-w-[100px]">{key}:</label>}
              {key === 'customerType' && <CustomerType type={String(value)} />}
              {key === 'id' && <span>{String(value)}</span>}
              {key !== 'id' && key !== 'customerType' &&
                <span className="border border-[var(--color-border)] px-5 py-2 rounded-md min-w-100" contentEditable="true">
                  {String(value)}
                </span>
              }
            </li>
          )
        })}
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
