"use client";
import React from "react";
import { MdNotificationsNone } from 'react-icons/md';

interface NotificationProps {}

const Notification = ({}: NotificationProps) => {
  return (
    <div className="relative group">
      <span className="cursor-pointer relative">
        <MdNotificationsNone size={25} />
        <span className="absolute top-[3px] right-[4px] w-2 h-2 rounded-full bg-[#c70a0a]"></span>
      </span>

      <div className="absolute top-[calc(100%_+_10px)] right-0 w-100 bg-[var(--sidebar-background)] shadow-2xl rounded-2xl z-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:top-[100%] transition-opacity">
        <div className="p-4 flex items-center gap-4 border-b-[1px] border-solid border-[var(--color-border)]">
          <h3 className="flex-1 text-lg">Notifications</h3>
          <button className="italic cursor-pointer hover:text-[var(--color-link-hover)] transition" onClick={() => {}}>Mark all as read</button>
        </div>
        <ul className="px-4 py-2">
          <li className="py-3 border-b-[1px] border-dashed border-[var(--color-border)]">Notification 1</li>
          <li className="py-3">Notification 2</li>
        </ul>
      </div>
    </div>
  )
};

export default Notification;
