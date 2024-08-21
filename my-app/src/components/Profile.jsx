import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser({
        username: userData.username,
        email: userData.email,
        password: userData.password
      });
    } else {
      navigate('/');
    }
  }, []);

  const handleLogOut = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="container mt-4">
        <h1>Profile</h1>
        <div className="card p-4">
          <h3>Username: {user.username}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Password: {'*'.repeat(user.password.length)}</h3> {/* Şifrəni gizlət */}
        </div>
        <button className="btn btn-danger mt-3" onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
}

export default Profile;
