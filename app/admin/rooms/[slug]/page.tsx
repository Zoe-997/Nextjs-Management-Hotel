"use client";  
import React, { Fragment, useState } from "react";
import Link from "next/link";

import FormFieldImage from "@/components/ui/FormFieldImage";
import FormFieldInput from "@/components/ui/FormFieldInput";
import FormFieldSelect from "@/components/ui/FormFieldSelect";
import FormFieldTextArea from "@/components/ui/FormFieldTextArea";

import { RiArrowGoBackLine } from 'react-icons/ri';
import { BiSolidSave } from 'react-icons/bi';

export interface RoomProps {
  id: number;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  images: string[];
  status: string;
}

const RoomDetail = () => {
  const roomData = {
    id: 1,
    name: '201',
    description: 'Room for 2 people with full facilities. The east-facing camera room with a large balcony to catch the sun and a tea table satisfies the passion for virtual life of young people',
    pricePerNight: 300,
    maxGuests: 2,
    images: [
      'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
      'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
      'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
      'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
      'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg',
      'https://raw.githubusercontent.com/Zoe-997/media-online/main/blog.jpg'
    ],
    status: 'AVAILABLE'
  };

  const statusOptions = [ 
    {label: "AVAILABLE",  value: "AVAILABLE"},
    {label: "BOOKED",  value: "BOOKED"},
    {label: "OCCUPIED",  value: "OCCUPIED"},
    {label: "CLEANING",  value: "CLEANING"},
    {label: "MAINTENANCE", value: "MAINTENANCE" }
  ];
  const [formData, setFormData] = useState<RoomProps>(roomData);
  const [dataChanged, setDataChanged] = useState(false);
  const handleChange = <K extends keyof RoomProps>(field: K, value: RoomProps[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (roomData[field] !== value) setDataChanged(!dataChanged);
  };

  return (
    <form className="grid items-start grid-cols-2 gap-7">
      {roomData &&
        <Fragment>
          <div className="flex flex-col gap-10">
            <FormFieldInput layout="vertical" type="text" name="name" value={formData.name} label="Room name" onChange={(e) => handleChange('name', e.target.value)} />

            <div className="grid grid-cols-2 gap-10">
              <FormFieldInput layout="horizontal" type="number" unit="$" name="pricePerNight" value={formData.pricePerNight} label="Price Per Night" onChange={(e) => handleChange('pricePerNight', Number(e.target.value))} />

              <FormFieldInput layout="horizontal" type="number" unit="per" name="maxGuests" value={formData.maxGuests} label="Max Guests" onChange={(e) => handleChange('maxGuests', Number(e.target.value))} />
            </div>

            <FormFieldSelect
              layout="horizontal"
              label="Status" 
              name="status"
              value={formData.status} 
              options={statusOptions} 
              onChange={(e) => handleChange('status', e.target.value)} 
            />

            <FormFieldTextArea layout="vertical" label="Description" name="description" value={formData.description} onChange={(e) => handleChange('description', e.target.value)} />
          </div>


          {formData?.images?.length > 0 &&
            <div className="grid grid-cols-6 gap-5">
              {formData?.images.map((image, index) => {
                const size = index === 0 ? 500 : 200
                const cols = index === 0 ? 'col-span-2': 'col-span-1'
                const rows = index === 0 ? 'row-span-2': 'row-span-1'
                return (
                  <div key={index} className={`${cols} ${rows}`}>
                    <FormFieldImage layout="vertical" name="images" value={image} width={size} height={size} />
                  </div>
                )
              })}
            </div>
          }

          <div className="flex items-center gap-4 mt-10 text-lg">
            <button type="submit" className={`${dataChanged ? '' : 'opacity-50 pointer-events-none '}cursor-pointer text-[var(--color-primary-button-text)] bg-[var(--color-primary-button)] hover:text-[var(--color-primary-button-text-hover)] hover:bg-[var(--color-primary-button-hover)] px-5 py-3 flex items-center gap-3 rounded-lg transition`}>
              <BiSolidSave size={20} />
              <span>Save change</span>
            </button>
            <Link href='/admin/rooms' className="flex items-center gap-1 hover:text-[var(--color-link-hover)] transition">
              <RiArrowGoBackLine size={20} />
              <span>Back</span>
            </Link>
          </div>
        </Fragment>
      }
    </form>
  )
};

export default RoomDetail;
