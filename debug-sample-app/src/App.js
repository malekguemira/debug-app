import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserList users={users} onUserSelect={handleUserSelect} />
      <UserDetail user={selectedUser} />
    </div>
  );
};

export default App;
