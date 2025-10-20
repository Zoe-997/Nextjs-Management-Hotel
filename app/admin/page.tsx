import Breadcrumb from "@/components/ui/Breadcrumb";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import BusinessOverview from "@/components/dashboard/BusinessOverview";
import CustomerInsights from "@/components/dashboard/CustomerInsights";
import PropertyMetrics from "@/components/dashboard/PropertyMetrics";

import type { AnalyticsCardsProp } from "@/components/dashboard/AnalyticsCards";
import type { BusinessOverviewProps } from "@/components/dashboard/BusinessOverview";
import type { PropertyMetricsProps } from "@/components/dashboard/PropertyMetrics";
import TrendsGrowth from "@/components/dashboard/TrendsGrowth";
import type { CustomerInsightsProps } from "@/components/dashboard/CustomerInsights";

import { IoMdWallet } from 'react-icons/io';
import { LuUserRound } from 'react-icons/lu';
import { TbBrandBooking } from 'react-icons/tb';
import { MdOutlineBedroomParent } from 'react-icons/md';

export default function Dashboard() {
  const AnalyticsData: AnalyticsCardsProp['items'] = [
    {
      title: "Total Payments",
      icon: <IoMdWallet size={30} />,
      value: 1200.79,
      percentage: 5,
      trend: "up"
    },
    {
      title: "Total Bookings",
      icon: <TbBrandBooking size={35} />,
      value: 30,
      percentage: 8,
      trend: "down"
    },
    {
      title: "Total Users",
      icon: <LuUserRound size={30} />,
      value: 10,
      percentage: 10,
      trend: "up"
    },
    {
      title: "Total Rooms",
      icon: <MdOutlineBedroomParent size={30} />,
      value: 50
    }
  ];

  const businessOverviewData: BusinessOverviewProps['items'] = [
    { title: "Total Revenue($)", value: "120,000.79" },
    { title: "ADR($/night)", value: "45.20" },
    { title: "Occupancy Rate (%)", value: "82" },
    { title: "RevPAR($)", value: "37.00" },
    { title: "Bookings This Month", value: 45 },
    { title: "Cancellations", value: 3 },
  ];

  const PropertyMetricsData: PropertyMetricsProps['items'] = [
    { title: "Total Properties", value: 50 },
    { title: "Available Rooms", value: 20 },
    { title: "Booked Rooms", value: 30 },
    { title: "Maintenance Requests", value: 1 }
  ];

  const CustomerInsightsData: CustomerInsightsProps['items'] = [
    { title: "Total Users", value: 1020 },
    { title: "Active Customers", value: 10 },
    { title: "New Users This Month", value: 30 },
    { title: "Returning Guests(%)", value: 80 }
  ];

  return (
    <>
      <AnalyticsCards items={AnalyticsData} />
      <BusinessOverview items={businessOverviewData} />
      <div className="grid grid-cols-2 gap-7">
        <PropertyMetrics items={PropertyMetricsData} />
        <CustomerInsights items={CustomerInsightsData} />
      </div>

      <TrendsGrowth />
    </>
  );
}
