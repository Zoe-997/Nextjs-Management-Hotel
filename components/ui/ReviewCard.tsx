"use client";
import React from "react";

export interface ReviewCardProps {
  item: {
    id: string | number;
    title: string;
    description: string;
    rating: number;
    date: string;
    avatar?: string;
    auth: string;
    position?: string;
  }
}

const ReviewCard = ({ item }: ReviewCardProps) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <div>{item.description}</div>
    </div>
  )
};

export default ReviewCard;
