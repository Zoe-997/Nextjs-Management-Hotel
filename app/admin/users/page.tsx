"use client";
import ListUsers from '@/components/dashboard/LitsUsers';

export default function Dashboard() {
  const usersData = [
    {
      id: 1,
      name: 'Zoe Trinh',
      email: 'thuminh10011997@gmail.com',
      phone: '(+84) 833 251 098',
      address: 'Ha Noi',
      birthday: '10/01/1997',
      role: 'ADMIN' as const,
      handle: 'zoe-trinh'
    },
    {
      id: 2,
      name: 'Ann Smith',
      email: 'annsmith01@gmail.com',
      phone: '(+1) 111-222-333-444',
      address: 'New York',
      birthday: '08/10/1968',
      role: 'CUSTOMER' as const,
      handle: 'ann-smith-01'
    }
  ];

  return (
    <>
      <ListUsers users={usersData} />
    </>
  );
}
