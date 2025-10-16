import React from "react";
import Notification from "../ui/Notification";
import Info from "../ui/Info";
import Search from "../ui/Search";
import Account from "../ui/Account";

interface PersonalProps {}

const Personal = ({}: PersonalProps) => {
  return (
    <div className="flex items-center gap-4 bg-[var(--sidebar-background)] p-3 px-5 rounded-full">
      <Search />
      <Notification />
      <Info />
      <Account />
    </div>
  )
};

export default Personal;
