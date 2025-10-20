"use client";
import React from "react";
import type { Metadata } from "next";

import PageTitle, { PageTitleProps } from "../ui/PageTitle";
import Breadcrumb from "../ui/Breadcrumb";
import Personal from "./Personal";

const DashboardHeader = ({ title }: PageTitleProps) => {
  return (
    <div>
      <Breadcrumb />
      <div className="flex items-center justify-between gap-4">
        <PageTitle title={title} />
        <Personal />
      </div>
    </div>
  )
};

export default DashboardHeader;
