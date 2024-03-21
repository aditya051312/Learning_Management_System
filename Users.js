import React from 'react';
import UserCard from './UserCard';

function Users() {
  // This would normally come from an API call
  const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    // ...
  ];

  return (
    <div className='grid grid-cols-3 gap-4'>
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
}

export default Users;