import React from 'react'
interface Users{
    id: number
    name : string
}
const AnotherPage = async () => {
    const res =await fetch("https://jsonplaceholder.typicode.com/users")
    const users: Users[] = await res.json()

  return (
      <>
          <h1>Users</h1>
          <div>
              {users.map((user) => <li key={user.id}>{user.name}</li>)}
          </div>
      </>
  )
}

export default AnotherPage