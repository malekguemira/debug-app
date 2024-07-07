import React from 'react';

const UserDetail = ({ user }) => {
  if (!user) {
    return <div>Select a user to see the details</div>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
