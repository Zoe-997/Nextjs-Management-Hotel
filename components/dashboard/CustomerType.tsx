"use client";
import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import { GiCutDiamond, GiLaurelCrown } from 'react-icons/gi';

interface CustomerTypeProps {
  type: string;
}

const CustomerType = ({type}: CustomerTypeProps) => {
  let customerTypeClass = 'border-[#A0A0A0]'
  if (type === 'VIP') customerTypeClass = 'border-[#FFD700] text-[#FFD700]'
  if (type === 'VVIP') customerTypeClass = 'border-[#8B00FF] text-[#8B00FF]'

  return (
    <div className={`border border-solid w-fit px-5 py-1 rounded-lg flex items-center gap-1 ${customerTypeClass}`}>
      {type === 'VIP' && <GiCutDiamond size={20} />}
      {type === 'VVIP' && <GiLaurelCrown size={20} />}
      {type === 'REGULAR' && <FaUserCircle size={20} />}
      <span>{String(type)}</span>
    </div>
  )
};

export default CustomerType;
