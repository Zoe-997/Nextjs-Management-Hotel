import React from "react";

export interface userProps {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  address?: string;
  birthday?: string;
  role: 'ADMIN' | 'CUSTOMER' | 'OWNER' | 'RECEPTIONIST' | 'MARKETING' | 'HOUSEKEEPING' | 'CUSTOMER',
  handle: string;
}

export interface UserCardProps {
  user: userProps
}

const UserCard = ({}: UserCardProps) => {
  return (
    <div>
      
    </div>
  )
};

export default UserCard;
