import React from 'react';
import { Link } from 'react-router-dom';

const UserProfilePage = () => {
  return (
    <div>
      <h1>User Profile Page</h1>
      <p>This is the User Profile Page.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default UserProfilePage;
