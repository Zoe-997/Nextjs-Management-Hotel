"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { RiExchangeLine } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface FormFieldImageProps {
  label?: string;
  layout: "vertical" | "horizontal";
  name: string;
  value?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFieldImage = ({
  placeholder,
  label,
  layout,
  name,
  value,
  width = 100,
  height = 100,
  onChange,
}: FormFieldImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`flex ${
        layout === "vertical"
          ? "flex-col gap-5"
          : "flex-row gap-3 items-center"
      }`}
    >
      {label && (
        <label htmlFor={name} className="capitalize min-w-30 font-medium">
          {label}
        </label>
      )}

      <div
        className="relative group border border-[var(--color-border)] rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition p-2 w-full h-full"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="group relative w-full pb-[100%] rounded-md overflow-hidden">
          {value ? (
            <Image
              src={value}
              alt={label || "Preview"}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm bg-gray-50">
              {placeholder || "Image"}
            </div>
          )}
        </div>

        <span className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white">
          <RiExchangeLine size={30} />
        </span>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        name={name}
        accept="image/*"
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
};

export default FormFieldImage;