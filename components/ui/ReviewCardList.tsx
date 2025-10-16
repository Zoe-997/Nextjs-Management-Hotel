"use client";
import React from "react";
import Image from "next/image";

import Rating from "./rating";
import { ReviewCardProps } from "./ReviewCard";

import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiUserCircle } from 'react-icons/hi2';

const ReviewCardList = ({ item }: ReviewCardProps) => {
  const handleViewReview = () => {
    // Implement view review functionality here
    console.log("View review clicked");
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-[#1B254B] rounded-lg">
      {item.avatar ? 
        <Image src={item.avatar} alt={item.auth} className="w-10 h-10 rounded-full object-cover" />
        :
        <HiUserCircle size={40} className="text-gray-400 rounded-full" />
      }

      <div className="flex-1">
        <h4 className="font-semibold">{item.auth}</h4>
        <div className="my-1"><Rating rating={item.rating} /></div>
        {item.position ?
          <p className="text-sm text-gray-500">{item.position}</p>
          :
          <p className="text-sm text-gray-500">{item.date}</p>
        }
      </div>

      <button onClick={handleViewReview} className="cursor-pointer">
        <BsThreeDotsVertical />
      </button>
    </div>
  )
};

export default ReviewCardList;
