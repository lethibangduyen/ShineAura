// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import useData from './useData';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  // Use the modified useData hook
  const usersData = useData('http://localhost:3000/users');

  useEffect(() => {
    // Set the users state when the data is available
    if (usersData) {
      setUsers(usersData);
    }
  }, [usersData]);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.email}</li>
        ))}
      </ul>
      {/* Add other admin dashboard content here */}
    </div>
  );
}

export default AdminDashboard;
