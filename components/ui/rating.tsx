import React from "react";

import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

interface RatingProps {
  rating: number;
  count?: number;
  showCount?: boolean;
}

const Rating = ({ rating, count, showCount }: RatingProps) => {
  const ratingWidth = (rating / 5) * 100;
  return (
    <div>
      <div className="relative">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="inline-block mx-[1px]"><AiOutlineStar className="text-yellow-500" /></span>
        ))}
        <div className='absolute top-0 left-0 bottom-0 overflow-hidden' style={{ width: `${ratingWidth}%` }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className="inline-block mx-[1px]"><AiFillStar className="text-yellow-500" /></span>
          ))}
        </div>
      </div>
      {showCount && count && <span className="ml-2 text-sm text-[var(--color-base)]">({count})</span>}
    </div>
  )
};

export default Rating;
