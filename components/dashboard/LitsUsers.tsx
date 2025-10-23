"use client";
import React from "react";
import { userProps } from "./UserCard";

import { FaRegEye, FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Link from "next/link";

export interface ListUsersProps {
  users: userProps[];
}

const ListUsers = ({ users }: ListUsersProps) => {
  return (
    <table className="table-auto border-collapse border border-solid border-[var(--color-border)] w-full text-sm">
      <thead className='uppercase bg-[var(--sidebar-background)]'>
        <tr>
          {Object.entries(users[0]).map(([key, _]) => (
            <th key={key} className="p-2 border border-[var(--color-border)] text-center font-semibold">{key}</th>
          ))}

          <th className="p-5 border border-[var(--color-border)] text-center font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => {
          return (
            <tr key={index}>
              {Object.entries(user).map(([key, value]) => (
                <td key={key} className="p-5 border border-[var(--color-border)] text-center">{String(value)}</td>
              ))}

              <td className="p-2 border border-[var(--color-border)]">
                <div className='flex gap-4 justify-center'>
                  <Link href={`/admin/users/${user.handle}`} className='cursor-pointer hover:text-[var(--color-link-hover)]' title='view'><FaRegEye size={20} /></Link>
                  <button className='cursor-pointer hover:text-[var(--color-link-hover)]' title='edit' onClick={() => {}}><FaRegEdit size={20} /></button>
                  <button className={`cursor-pointer hover:text-[var(--color-link-hover)]`} 
                    title='remove' 
                    onClick={() => {}}
                  >
                    <RiDeleteBin5Line size={20} />
                  </button>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

export default ListUsers;
