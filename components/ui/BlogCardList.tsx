import React from "react"
import { BlogCardProps } from "./BlogCard";
import Image from "next/image";
import Link from "next/link";

const BlogCardList = ({ item }: BlogCardProps) => {
  return (
    <div className="p-3 bg-[#1B254B] rounded-lg">
      <Link href={`/blog/${item.handle}`} className="flex items-center gap-3">
        <Image src={item.featureImage} alt={item.title} width={50} height={50} className="w-15 h-15 rounded-full object-cover" />
        <div className="flex-1">
          <h4 className="font-semibold mb-2">{item.title}</h4>
          <p className="line-clamp-2">{item.description}</p>
        </div>
      </Link>
    </div>
  )
};

export default BlogCardList;
