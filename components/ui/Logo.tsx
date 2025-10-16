"use client";
import Image from "next/image";
import React from "react";

interface LogoProp {
  logo?: string;
  logoWidth?: number | 20;
  logoHeight?: number | 20;
}

const Logo = ({ logo, logoWidth, logoHeight }: LogoProp ) => {
  return (
    <div className="text-center uppercase font-[family-name:--font-heading]">
      {logo ?  <Image src={logo} alt="Logo" width={logoWidth} height={logoHeight} /> : "Booking"}
    </div>
  )
};

export default Logo;
