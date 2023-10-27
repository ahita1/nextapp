import React from 'react'
import UserTable from "./UserTable";
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
      <Link className='btn' href="/users/anotherPage">New Users</Link>
        
    </>
  );
};

export default UsersPage;