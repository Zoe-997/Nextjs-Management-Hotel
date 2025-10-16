"use client";
import React from "react";
import RevenueGrowthChart from "./RevenueGrowthChart";
import OccupancyTrend from "./OccupancyTrend";
import BookingSourceBreakdown from "./BookingSourceBreakdown";
import AverageStayDuration from "./AverageStayDuration";
import CancellationTrend from "./CancellationTrend";
import ReviewCardList from "../ui/ReviewCardList";
import BlogCardList from "../ui/BlogCardList";

import { AiOutlinePlusCircle } from 'react-icons/ai';
import Link from "next/link";

export interface TrendsGrowthProps {}

const TrendsGrowth = ({}: TrendsGrowthProps) => {
  const reviews = [
    { id: 1, title: "Great stay!", description: "I had a wonderful time at the property. The staff was friendly and the amenities were top-notch.", rating: 5, date: "2023-10-01", auth: "John Doe", position: "Software Engineer" },
    { id: 2, title: "Average experience", description: "The location was convenient, but the room was a bit small for my liking. Overall, it was okay.", rating: 3, date: "2023-09-15", auth: "Jane Smith", position: "Software Engineer" },
    { id: 3, title: "Would not recommend", description: "The property did not meet my expectations. The cleanliness was subpar and the service was lacking.", rating: 1, date: "2023-08-20", auth: "Alice Johnson", position: "Software Engineer" },
  ];

  const blogs = [
    { id: 1, title: "Great stay!", featureImage: 'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg', description: "I had a wonderful time at the property. The staff was friendly and the amenities were top-notch.", date: "2023-10-01", auth: "John Doe", tags: ["Verified Guest"], handle: "great-stay" },
    { id: 2, title: "Average experience", featureImage: 'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg', description: "The location was convenient, but the room was a bit small for my liking. Overall, it was okay.", date: "2023-09-15", auth: "Jane Smith", tags: ["Verified Guest"], handle: "average-experience" },
    { id: 3, title: "Would not recommend", featureImage: 'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg', description: "The property did not meet my expectations. The cleanliness was subpar and the service was lacking.", date: "2023-08-20", auth: "Alice Johnson", tags: ["Verified Guest"], handle: "would-not-recommend" },
  ];

  return (
    <div className="flex flex-col gap-3 bg-[var(--sidebar-background)] p-5 rounded-2xl">
      <h2 className="uppercase font-[var(--font-heading)] text-xl mb-5">Trends & Growth</h2>
      <div className="grid grid-cols-2 gap-7">
        <RevenueGrowthChart />
        <BookingSourceBreakdown />
        <OccupancyTrend />
        <AverageStayDuration />
        <CancellationTrend />

        <div className="grid grid-cols-2 gap-7">
          <div>
            <div className="flex items-center justify-between mb-7">
              <h3 className='text-xl text-center'>Reviews</h3>
              <Link href="/admin/reviews" title="All reviews">
                <AiOutlinePlusCircle size={20} />
              </Link>
            </div>
            <ul className="w-full flex flex-col gap-4">
              {reviews?.map((review, index) => (
                <li key={index} className="rounded-lg shadow">
                  <ReviewCardList item={review} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-between mb-7">
              <h3 className='text-xl text-center'>Blogs</h3>
              <Link href="/admin/blogs" title="All blogs">
                <AiOutlinePlusCircle size={20} />
              </Link>
            </div>
            <ul className="w-full flex flex-col gap-4">
              {blogs?.map((blog, index) => (
                <li key={index} className="rounded-lg shadow">
                  <BlogCardList item={blog} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TrendsGrowth;
