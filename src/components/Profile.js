import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  if (!user) {
    return <p>No user data available. Please go back and fill out the form.</p>;
  }

  return (
    <div className='container'>
      <h1>Profile</h1>
      <div className='profile-info'>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Favorite Season: {user.favoriteSeason}</p>
      </div>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Profile;
