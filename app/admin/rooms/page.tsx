"use client";  
import Pagination from "@/components/ui/Pagination";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { FaRegEye, FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Rooms = () => {
  const roomsData = [
    {
      id: 1,
      name: '201',
      description: 'Basic Rooms',
      pricePerNight: 300,
      maxGuests: 2,
      images: [
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg'
      ],
      status: 'AVAILABLE'
    },
    {
      id: 1,
      name: '203',
      description: 'Basic Rooms',
      pricePerNight: 290,
      maxGuests: 2,
      images: [
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg'
      ],
      status: 'BOOKED'
    },
    {
      id: 1,
      name: '305',
      description: 'Basic Rooms',
      pricePerNight: 350,
      maxGuests: 2,
      images: [
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg'
      ],
      status: 'OCCUPIED'
    },
    {
      id: 1,
      name: '206',
      description: 'Basic Rooms',
      pricePerNight: 350,
      maxGuests: 2,
      images: [
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg'
      ],
      status: 'CLEANING'
    },
    {
      id: 1,
      name: '307',
      description: 'Basic Rooms',
      pricePerNight: 350,
      maxGuests: 2,
      images: [
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
        'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg'
      ],
      status: 'MAINTENANCE'
    }
  ];

  // const [rooms, setRooms] = useState<Room[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(roomsData.length);
  const itemsPerPage = 10;

  // Gọi API mỗi khi đổi trang
  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     try {
  //       const res = await fetch(
  //         `/api/rooms?page=${currentPage}&limit=${itemsPerPage}`
  //       );
  //       const data = await res.json();

  //       setRooms(data.items);
  //       setTotalItems(data.total);
  //     } catch (error) {
  //       console.error("Error fetching rooms:", error);
  //     }
  //   };

  //   fetchRooms();
  // }, [currentPage]);

  return (
    <Fragment>
      <table className="table-auto border-collapse border border-solid border-[var(--color-border)] w-full text-sm">
        <thead className='uppercase bg-[var(--sidebar-background)]'>
          <tr>
            {Object.entries(roomsData[0]).map(([key, _]) => (
              <th key={key} className="p-2 border border-[var(--color-border)] text-center font-semibold">{key}</th>
            ))}
  
            <th className="p-5 border border-[var(--color-border)] text-center font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roomsData?.map((room, index) => {
            let statusStyle = 'text-[#22C55E]';
            if (room.status === 'BOOKED') statusStyle = 'text-[#8B5CF6]'
            if (room.status === 'OCCUPIED') statusStyle = 'text-[#3B82F6]'
            if (room.status === 'CLEANING') statusStyle = 'text-[#A3A3A3]'
            if (room.status === 'MAINTENANCE') statusStyle = 'text-[#FFA500]'
            return (
              <tr key={index}>
                {Object.entries(room).map(([key, value]) => {
                  return (
                    <td key={key} className="p-5 border border-[var(--color-border)] text-center">
                      {key === 'images' ?
                        (
                          <div className="relative pb-[100%]">
                            <Image src={room.images[0]} width={100} height={100} alt={room.name} className="absolute top-0 left-0 w-full h-full object-cover rounded-sm" />
                          </div>
                        )
                        :
                        <span className={`${key === 'status' && statusStyle}`}>{String(value)}</span>
                      }
                    </td>
                  )
                })}
  
                <td className="p-2 border border-[var(--color-border)]">
                  <div className='flex gap-4 justify-center'>
                    <Link href={`/admin/rooms/${room.id}`} title="view" className="hover:text-[var(--color-link-hover)]">
                      <FaRegEye size={20} />
                    </Link>
                    <button className='cursor-pointer hover:text-[var(--color-link-hover)]' title='edit' onClick={() => {}}><FaRegEdit size={20} /></button>
                    <button className='cursor-pointer hover:text-[var(--color-link-hover)]' title='edit' onClick={() => {}}><RiDeleteBin5Line size={20} /></button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Fragment>
  )
};

export default Rooms;
