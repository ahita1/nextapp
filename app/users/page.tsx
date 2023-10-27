import React, { Suspense } from 'react'
import UserTable from "./UserTable";
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {

  return (
    <>
      <h1>Users</h1>
      <Suspense fallback = {<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      <Link className='btn' href="/users/anotherPage">New Users</Link>

    </>
  );
};

export default UsersPage;