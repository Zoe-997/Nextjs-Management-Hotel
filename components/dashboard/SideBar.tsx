"use client";
import React from "react"
import Logo from "../ui/Logo";
import Menu from "../ui/Menu";

import { RiDashboard3Line } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { TbBrandBooking } from 'react-icons/tb';
import { PiNewspaper } from 'react-icons/pi';
import { MdOutlinePayments } from 'react-icons/md';
import { GoCodeReview } from 'react-icons/go';
import { RiDiscountPercentLine } from 'react-icons/ri';

const dataMenu = [
  {
    title: 'Dashboard',
    icon: <RiDashboard3Line />,
    href: '/admin'
  },
  {
    title: 'Users',
    icon: <FaRegUserCircle />,
    href: '/admin/users'
  },
  {
    title: 'Rooms',
    icon: <MdOutlineBedroomParent />,
    href: '/admin/rooms'
  },
  {
    title: 'Bookings',
    icon: <TbBrandBooking />,
    href: '/admin/bookings'
  },
  {
    title: 'Payments',
    icon: <MdOutlinePayments />,
    href: '/admin/payments'
  },
  {
    title: 'Blogs',
    icon: <PiNewspaper />,
    href: '/admin/blogs'
  },
  {
    title: 'Reviews',
    icon: <GoCodeReview />,
    href: '/admin/reviews'
  },
  {
    title: 'Discounts',
    icon: <RiDiscountPercentLine />,
    href: '/admin/discounts'
  },
]

const SideBar = ({}) => {
  return (
    <div>
      <div className="border-b-[1px] border-solid border-[var(--color-border)] py-5 px-2 text-2xl">
        <Logo logoWidth={100} logoHeight={100} /> 
      </div>
      <div className="overflow-y-auto h-[calc(100vh-80px)] scrollbar-thin">
        <Menu items={dataMenu} type="vertical" size="var(--font-base)" />
      </div>
    </div>
  )
};

export default SideBar;
