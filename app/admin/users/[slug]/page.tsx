"use client";  
import React, { Fragment } from "react";
import Link from "next/link";
import { userProps } from "@/components/dashboard/UserCard";

import { FaRegEye, FaRegEdit, FaUserCircle } from 'react-icons/fa';
import { TbCancel } from 'react-icons/tb';
import { RiArrowGoBackLine, RiDeleteBin5Line } from 'react-icons/ri';
import { GiCutDiamond, GiLaurelCrown } from 'react-icons/gi';

interface UserDetailProps {
  user: userProps & {
    customType: 'REGULAR' | 'VIP' | 'VVIP';
  };
}

const UserDetail = () => {
  const user = {
    customerType: 'VVIP',
    id: 1,
    name: 'Zoe Trinh',
    email: 'thuminh10011997@gmail.com',
    phone: '(+84) 833 251 098',
    address: 'Ha Noi',
    birthday: '10/01/1997',
    role: 'ADMIN' as const,
    handle: 'zoe-trinh',
  };

  const userBookings = [
    {
      id: 1,
      roomId: 5,
      checkIn: '15/08/2025',
      checkOut: '20/08/2025',
      totalPrice: '500',
      status: 'CHECKED_OUT',
      payment:'SUCCESS'
    },
    {
      id: 10,
      roomId: 5,
      checkIn: '15/10/225',
      checkOut: '17/10/2025',
      totalPrice: '500',
      status: 'CONFIRMED',
      payment:'SUCCESS'
    }
  ]

  return (
    <div className="py-20">
      <h2 className="text-3xl font-[family-name:--font-heading] text-center">View detail</h2>      
      <ul className="text-lg">
        {Object.entries(user).map(([key, value]) => {
          let customerTypeClass = 'border-[#A0A0A0]'
          if (value === 'VIP') customerTypeClass = 'border-[#FFD700] text-[#FFD700]'
          if (value === 'VVIP') customerTypeClass = 'border-[#8B00FF] text-[#8B00FF]'

          return (
            <Fragment key={key}>
              {key === 'customerType' ? (
                value !== null && <div className={`border border-solid w-fit px-5 py-1 rounded-lg flex items-center gap-1 ${customerTypeClass}`}>
                  {value === 'VIP' && <GiCutDiamond size={20} />}
                  {value === 'VVIP' && <GiLaurelCrown size={20} />}
                  {value === 'REGULAR' && <FaUserCircle size={20} />}
                  <span>{String(value)}</span>
                </div>
              ) : (
                <li className="py-3 flex gap-5 border-b-[1px] border-dashed border-[var(--color-border)] last:border-0">
                  <span className="capitalize min-w-[100px]">{key}:</span>
                  <span>{String(value)}</span>
                </li>
              )}
            </Fragment>
          )
        })}
      </ul>

      <div className="flex items-center gap-4 mt-10 text-lg">
        <Link href={`/admin/users/${user.handle}/edit`} className="text-[var(--color-primary-button-text)] bg-[var(--color-primary-button)] hover:text-[var(--color-primary-button-text-hover)] hover:bg-[var(--color-primary-button-hover)] px-5 py-3 flex items-center gap-3 rounded-lg transition">
          <FaRegEdit size={20} />
          <span>Edit user</span>
        </Link>
        <button className="cursor-pointer text-[var(--color-primary-button-text)] bg-[var(--color-primary-button)] hover:text-[var(--color-primary-button-text-hover)] hover:bg-[var(--color-primary-button-hover)] px-5 py-3 flex items-center gap-3 rounded-lg transition"
          onClick={() => {}}
        >
          <RiDeleteBin5Line size={20} />
          <span>Remove user</span>
        </button>
        <Link href='/admin/users' className="flex items-center gap-1 hover:text-[var(--color-link-hover)] transition">
          <RiArrowGoBackLine size={20} />
          <span>Back</span>
        </Link>
      </div>

      <br/>
      <br/>
      <br/>
      <h2 className="text-3xl font-[family-name:--font-heading] text-center mb-7">Bookings</h2>
      <table className="table-auto border-collapse border border-solid border-[var(--color-border)] w-full text-sm">
        <thead className='uppercase bg-[var(--sidebar-background)]'>
          <tr>
            {Object.entries(userBookings[0]).map(([key, _]) => (
              <th key={key} className="p-2 border border-[var(--color-border)] text-center font-semibold">{key}</th>
            ))}
  
            <th className="p-5 border border-[var(--color-border)] text-center font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userBookings?.map((booking, index) => {
            return (
              <tr key={index}>
                {Object.entries(booking).map(([key, value]) => (
                  <td key={key} className="p-5 border border-[var(--color-border)] text-center">{String(value)}</td>
                ))}
  
                <td className="p-2 border border-[var(--color-border)]">
                  <div className='flex gap-4 justify-center hover:text-[var(--color-link-hover)]'>
                    <Link href={`/admin/bookings/${booking.id}`} title="view">
                      <FaRegEye size={20} />
                    </Link>
                    <button className='cursor-pointer hover:text-[var(--color-link-hover)]' title='edit' onClick={() => {}}><FaRegEdit size={20} /></button>
                    <button className='cursor-pointer hover:text-[var(--color-link-hover)]' title='cancel' onClick={() => {}}><TbCancel size={20} /></button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default UserDetail;
