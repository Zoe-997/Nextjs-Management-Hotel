import Image from "next/image";
import React from "react";

export interface BlogCardProps {
  item: {
    id: string | number;
    featureImage: string;
    title: string;
    description: string;
    date: string;
    auth: string;
    tags?: string[];
    handle: string;
  }
}

const BlogCard = ({ item }: BlogCardProps) => {
  return (
    <div>
      <Image src={item.featureImage} alt={item.title} width={500} height={500} className="w-10 h-10 rounded-full object-cover" />
      <h4>{item.title}</h4>
      <p>{item.auth} - {item.date}</p>
      <div>{item.description}</div>
    </div>
  )
};

export default BlogCard;
