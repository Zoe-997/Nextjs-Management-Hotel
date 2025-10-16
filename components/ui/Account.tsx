"use client";
import Image from "next/image";
import React from "react";

import { RiProfileFill } from 'react-icons/ri';
import { TbLogout2 } from 'react-icons/tb';

interface AccountProps {}

const Account = ({}: AccountProps) => {
  return (
    <div className="relative group">
      <span className="cursor-pointer">
        <Image src={'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg'} alt="user" width={41} height={41} className="rounded-full w-[41px] h-[41px]" />
      </span>

      <div className="absolute top-[calc(100%_+_10px)] right-0 w-50 bg-[var(--sidebar-background)] shadow-2xl rounded-2xl z-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:top-[100%] transition-opacity">
        <div className="p-4 border-b-[1px] border-solid border-[var(--color-border)] text-center">
          <h3 className="text-lg">UseName</h3>
          <p className="italic">Position</p>
        </div>
        <ul className="px-4 py-2">
          <li className="flex items-center gap-2 py-3 border-b-[1px] border-dashed border-[var(--color-border)]">
            <RiProfileFill size={20} /> <span>Your profile</span>
          </li>
          <li className="flex items-center gap-2 py-3">
            <TbLogout2 size={20} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Account;
