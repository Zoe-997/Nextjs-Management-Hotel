"use client";

import { tableClass, tbodyTdClass, theadThClass, theadTrClass } from "@/components/ui/BaseClass";
import Link from "next/link";
import React from "react";
import { HiViewfinderCircle } from 'react-icons/hi2';

interface BookingProps {

}

const Bookings = ({}: BookingProps) => {
  const bookings = [
    {
      id: 1,
      user: {
        id: 1,
        name: "John Doe",
        handle: 'john-doe'
      },
      room: {
        id: 2,
        name: '203'
      },
      createAt: '15/10/2025',
      checkIn: '23/10/2025',
      checkOut: '26/10/2025',
      basePrice: 1050,
      extraCharges: 0,
      depositAmount: 0,
      discount: 0,
      totalPrice: 1050,
      balanceDue: 1050,
      status: 'CHECKED_IN',
      source: {
        id: 1,
        name: 'Website'
      },
      paymentStatus: "PAID",
      note: ''
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Zoe Trinh",
        handle: 'zoe-trinh'
      },
      room: {
        id: 3,
        name: '305'
      },
      createAt: '20/9/2025',
      checkIn: '21/10/2025',
      checkOut: '26/10/2025',
      basePrice: 2500,
      extraCharges: 0,
      depositAmount: 500,
      discount: 150,
      totalPrice: 2350,
      balanceDue: 1700,
      status: 'CHECKED_IN',
      source: {
        id: 1,
        name: 'Website'
      },
      paymentStatus: "PARTIALLY_PAID",
      note: ''
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Ann Smith",
        handle: 'ann-smith'
      },
      room: {
        id: 4,
        name: '506'
      },
      createAt: '15/10/2025',
      checkIn: '23/10/2025',
      checkOut: '26/10/2025',
      basePrice: 1050,
      extraCharges: 0,
      depositAmount: 1050,
      balanceDue: 0,
      discount: 0,
      totalPrice: 1050,
      status: 'PENDING',
      source: {
        id: 2,
        name: 'Phone'
      },
      paymentStatus: "FAILED",  
      // payment: {
      //   id: 'pay_1',
      //   status: 'SUCCESS'
      // },
      note: ''
    },
    {
      id: 4,
      user: {
        id: 1,
        name: "John Doe",
        handle: 'john-doe'
      },
      room: {
        id: 5, 
        name: '307'
      },
      createAt: '15/10/2025',
      checkIn: '23/10/2025',
      checkOut: '26/10/2025',
      basePrice: 1050,
      extraCharges: 0,
      depositAmount: 0,
      discount: 0,
      totalPrice: 1050,
      balanceDue: 1050,
      status: 'CANCELLED',
      source: {
        id: 2,
        name: 'Walk-in'
      },
      paymentStatus: "REFUNDED",
      note: "refunded"
    }
  ];

  return (
    <div>
      <table className={tableClass}>
        <thead>
          <tr className={theadTrClass}>
            <th className={theadThClass}>ID</th>
            <th className={theadThClass}>ROOM</th>
            <th className={theadThClass}>USER</th>
            <th className={theadThClass}>TOTAL</th>
            <th className={theadThClass}>PAID</th>
            <th className={theadThClass}>BALANCE</th>
            <th className={theadThClass}>SOURCE</th>
            <th className={theadThClass}>BOOKING DATE</th>
            <th className={theadThClass}>BOOKING PAYMENT</th>
            <th className={theadThClass}>NOTE</th>
            <th className={theadThClass}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((booking, index) => {
            let paymentStatus = 'text-[#9E9E9E]';
            if (booking.paymentStatus === 'PARTIALLY_PAID') paymentStatus = 'text-[#FFA000]';
            if (booking.paymentStatus === 'PAID') paymentStatus = 'text-[#2E7D32]';
            if (booking.paymentStatus === 'REFUNDED') paymentStatus = 'text-[#2196F3]';
            if (booking.paymentStatus === 'FAILED') paymentStatus = 'text-[#F44336]';

            return (
              <tr key={index}>
                <td className={`${tbodyTdClass}`}>{booking.id}</td>
                <td className={`${tbodyTdClass}`}>
                  <Link href={`/admin/rooms/${booking.room?.id}`}>{booking.room?.name}</Link>
                </td>
                <td className={`${tbodyTdClass}`}>
                  <Link href={`/admin/users/${booking.user.handle}`}>{booking.user.name}</Link>
                </td>
                <td className={`${tbodyTdClass}`}>
                  <div className="group relative cursor-pointer">
                    {booking.totalPrice}
                    <ul className="absolute py-3 px-5 group-hover:top-[calc(100%+10px)] group-hover:opacity-100 group-hover:visible left-[50%] -translate-x-[50%] top-[calc(100%+30px)] opacity-0 invisible ease-in-out duration-300 bg-[var(--sidebar)] min-w-50 rounded-md text-left z-1">
                      <li className="py-1">Base price: <span>${booking.basePrice}</span></li>
                      <li className="py-1">Extra Charges: <span>${booking.extraCharges}</span></li>
                      <li className="py-1">Deposit Amount: <span>${booking.depositAmount}</span></li>
                      <li className="py-1">Discount: <span className="text-[#c70a0a]">-${booking.discount}</span></li>
                    </ul>
                  </div>
                </td>
                <td className={`${tbodyTdClass}`}>{booking.depositAmount}</td>
                <td className={`${tbodyTdClass}`}>{booking.balanceDue}</td>
                <td className={`${tbodyTdClass}`}>
                  <Link href={`admin/sources/${booking.source.id}`}>{booking.source.name}</Link>
                </td>
                <td className={`${tbodyTdClass}`}>{booking.createAt}</td>
                
                <td className={`${tbodyTdClass} ${paymentStatus}`}>{booking.paymentStatus}</td>
                <td className={`${tbodyTdClass}`}>{booking.note}</td>
                <td className={`${tbodyTdClass}`}>
                  <Link href={`/admin/bookings/${booking.id}`} className="inline-block"><HiViewfinderCircle size={25} /></Link>
                </td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  )
};

export default Bookings;
